import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Typography from '@mui/material/Typography'
import { validateRegisterSchema } from "../../validation/registerValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ROUTES from "../../routes/ROUTES";

const SignUpButton = ({ setShowErrors, setErrorState, inputState, handleRegisterClick }) => {
    
    const navigate = useNavigate();

    const registerButtonClick = (event) => {
        handleRegisterClick(event);
    };

    const handleRegisterClick1 = async (event) => {
        try {
            setShowErrors(true);
            const errors = validateRegisterSchema(inputState);
            console.log("Validation Error: ", errors);
            delete inputState.repeatPassword;
            setErrorState(errors);
            if (errors)
                return;
            await axios.post("/users/register", inputState);
            navigate(ROUTES.LOGIN);
            toast.success(`Welcome ${inputState.name} to Card Match!`);
        } catch (error) {
            console.log("error from axios", error.response.data);
            toast.error("Error trying to regsiter user");
        }
    }

    return (
        <Button
            fullWidth
            variant="contained"
            sx={{ my: 1 }}
            onClick={registerButtonClick}
        >
            <Typography variant="body1" color="initial">
                Sign Up
            </Typography>
        </Button>
    );
};

SignUpButton.propTypes = {
    handleRegisterClick: PropTypes.func.isRequired,
};

export default SignUpButton;
