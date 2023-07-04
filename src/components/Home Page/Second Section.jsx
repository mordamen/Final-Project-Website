import { Container } from "@mui/material";
import CardGallery from "../Business Cards/Card Gallery";

const SecondSection = (cardsArr, setCardsArr, payload) => {

    return (
        <section className="second-panel">
            <Container maxWidth='false' component='section' className='cards-showcase second panel' sx={{ display: "flex"}}>
                <CardGallery cardsArr={cardsArr} setCardsArr={setCardsArr} payload={payload} />
            </Container>
        </section>
    );
}

export default SecondSection;