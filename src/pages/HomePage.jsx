import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";

import {Container} from "@mui/material";

import useQueryParams from "../hooks/useQueryParams";
import CardGallery from "../components/Business Cards/Card Gallery";
import FirstSection from "../components/Home Page/First Section";
import SecondSection from "../components/Home Page/Second Section";
import scrollFading from "../utilities/scrollFading";


const HomePage = () => {
    const [originalCardsArr, setOriginalCardsArr] = useState(null);
    const [cardsArr, setCardsArr] = useState(null);

    let qparams = useQueryParams();
    const payload = useSelector((bigPie) => bigPie.authSlice.payload);

    useEffect(() => {
        const filterFunc = (data) => {
            if (!originalCardsArr && !data) {
            return;
            }
            let filter = "";
            if (qparams.filter) {
            filter = qparams.filter;
            }
            if (!originalCardsArr && data) {
            /*
                when component loaded and states not loaded
            */
            setOriginalCardsArr(data);
            setCardsArr(data.filter((card) => card.title.startsWith(filter) || card.bizNumber.startsWith(filter)));
            return;
            }
            if (originalCardsArr) {
            /*
                when all loaded and states loaded
            */
            let newOriginalCardsArr = JSON.parse(JSON.stringify(originalCardsArr));
            setCardsArr(
                newOriginalCardsArr.filter((card) => card.title.startsWith(filter) || card.bizNumber.startsWith(filter))
            );
            }
        };

        axios
            .get("/cards/cards")
            .then(({ data }) => {
            console.log("OG Cards data:", data);
            filterFunc(data);
            })
            .catch((error) => {
            console.log("err from axios", error);
            toast.error("Failed to retrieve buisiness cards data");
            });

        scrollFading();
    }, [originalCardsArr, qparams.filter]);
    
    // if (!cardsArr) {
    //   return <CircularProgress/>
    // }

    return (
        <Fragment>
            <FirstSection />
            {!cardsArr? "" : 
            <Container maxWidth='false' component='section' className='cards-showcase second panel' sx={{ display: "flex"}}>
                <CardGallery cardsArr={cardsArr} setCardsArr={setCardsArr} payload={payload} />
            </Container>}
            {/* <SecondSection cardsArr={cardsArr} setCardsArr={setCardsArr} payload={payload} /> */}
        </Fragment>
    );
};

export default HomePage;