import { Container, Typography } from "@mui/material";

const FirstSection = () => {

    return (
        <Container component='section' maxWidth='false' className='hero-section first panel' sx={{display: 'flex',}}>
            <Container sx={{maxWidth: 'sm', display: 'flex', flexDirection: 'column', m: 'auto'}}>
                <Typography component="h1" variant="h2" align="center" color="primary.dark" gutterBottom sx={{ fontSize: 'h2.fontSize' }}>
                Card Match
                </Typography>
                <Typography component="h5" variant="h5" align="center" color="primary.dark" maxWidth='sm' margin='auto' sx={{ fontSize: 'h5.fontSize' }} gutterBottom>
                    Whether you're looking for a new partner, client, or supplier, our website is the ultimate resource for finding and connecting with top businesses. So why wait? Start browsing today and discover your next business connection!
                </Typography>
            </Container>
        </Container>
    );
}

export default FirstSection;