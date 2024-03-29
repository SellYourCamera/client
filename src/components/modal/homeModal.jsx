import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

import { green, red } from '@mui/material/colors';
import { MuiTelInput } from 'mui-tel-input';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./homeModal.css";




const theme = createTheme();
const Modal = ({ setIsModalOpen }) => {
    const successColor = green[500];
    const errorColor = red[500];

    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [brand, setBrand] = useState('');

    const [showAlert, setShowAlert] = useState();
    const [emailSendStatus, setEmailSendStatus] = useState();
    const [apiResponseStatus, setApiResponseStatus] = useState();
    const [emailMsg, setEmailMsg] = useState('Form was not submitted. Something went wrong.');
    var timer;

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowAlert(false);
    //     }, 3000);

    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [showAlert, apiResponseStatus, emailSendStatus, emailMsg]);



    //event Trigger to get data
    const handleRequestCall = async (event) => {
        event.preventDefault();

        const userDataToSend = {
            user_name: username,
            user_email: email,
            phone: phone,
            brand: brand
        };

        //added data to database using api
        try {
            var apiResponse = await axios.post(`${process.env.REACT_APP_Backend_URL}/api/userCallRequest`, userDataToSend);
            if (apiResponse.status == 200) {
                setApiResponseStatus(200);
                const emailSend = await emailjs.send('service_ngdcyav', 'template_1aelszg', {
                    user_name: username,
                    user_email: email,
                    phone: phone,
                    brand: brand
                }, 'hy36fsY8bXE28K2DQ')
                    .then((result) => {
                        console.log('Email sent successfully', result.text);
                        setEmailMsg('Thank You For Call Request. We will connect with you soon.');
                        setEmailSendStatus(200);
                    }, (error) => {
                        console.log('Failed to send email', error);
                        setEmailSendStatus(0);
                    });

            }


        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        if (emailSendStatus === 200 && apiResponseStatus === 200) {
            // Email sent successfully and data added to the database
            // setEmailMsg('Thank You For Call Request. We will connect with you soon.');
            setShowAlert(true);
            timer = setTimeout(() => {
                setShowAlert(false);
                setIsModalOpen(false); // Close the modal after hiding the alert (optional)
            }, 3000);

        } else {
            // Form was not submitted or something went wrong
            if(emailSendStatus===0 && apiResponseStatus ===0){
            setShowAlert(true);
             timer = setTimeout(() => {
                setShowAlert(false);
                setIsModalOpen(false); // Close the modal after hiding the alert (optional)
            }, 3000);
        }
        else{
            setIsModalOpen(true);
        }

        }

        console.log("email Msg", emailMsg)

         return () => clearTimeout(timer);
    }, [emailSendStatus, setIsModalOpen,apiResponseStatus]);


    //close modal
    const handlemodalclose = () => {
        setIsModalOpen(false);
    }
    //make call
    const handleMakeCall = () => {
        window.location.href = 'tel:+91 9557755504';
    }

    console.log('emailsendstatus', emailSendStatus, 'apiResponseStatus', apiResponseStatus);
    return (
        <div className="home-modal-box">
            {(showAlert && emailMsg) && (
                <div className={`top-alert ${showAlert ? 'fade-in' : 'fade-out'}`} style={{ backgroundColor: emailSendStatus === 200 ? successColor : errorColor }}>
                    <div className="alert-content">
                        {emailMsg}
                    </div>
                </div>
            )}

            <div className="home-modal-overlay">
                <div className="home-modal-pop">
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 4,
                                    marginBottom: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <IconButton aria-label="delete" color="primary"
                                    onClick={handlemodalclose}
                                    sx={{
                                        position: 'absolute',
                                        top: '2px',
                                        right: '2px',
                                        fontSize: 'large',

                                    }}>
                                    <CloseIcon />
                                </IconButton>

                                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                                    <AssignmentIcon />
                                </Avatar>
                                <Typography component="h1" variant="h4">
                                    Call Request
                                </Typography>
                                <p style={{ textAlign: "center" }}>Help Us to Reach You </p>

                                <Box component="form" id="callRequestForm" noValidate sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="given-name"
                                                type="text"
                                                name="user_name"
                                                required
                                                fullWidth
                                                id="user_name"
                                                label="Name"
                                                autoFocus
                                                value={username}
                                                onChange={(event) => setUserName(event.target.value)}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                type="email"
                                                id="user_email"
                                                label="email"
                                                name="user_email"
                                                autoComplete="family-name"
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}

                                            />
                                        </Grid>
                                        <Grid item xs={12}>

                                            <MuiTelInput
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="phone"
                                                name="phone"
                                                value={phone}
                                                onChange={(newPhone) => setPhone(newPhone)}
                                                defaultCountry="IN"
                                                label="Phone Number"

                                            />
                                        </Grid>
                                        <Grid item xs={12}>

                                            <Box sx={{ minWidth: 120 }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">Select which camera you want to sell?</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={brand}
                                                        label="Select which camera you want to sale"
                                                        onChange={(event) => setBrand(event.target.value)}
                                                    >
                                                        <MenuItem value='Canon'>Canon</MenuItem>
                                                        <MenuItem value='Nikon'>Nikon</MenuItem>
                                                        <MenuItem value='Panasonic'>Panasonic</MenuItem>
                                                        <MenuItem value='Sony'>Sony</MenuItem>
                                                        <MenuItem value='FujiFilm'>FujiFilm</MenuItem>
                                                        <MenuItem value='Black Magic'>BlackMagic</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                                label="I want to receive inspiration via SMS."
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        onClick={handleRequestCall}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2, boxShadow: 'none', borderRadius: 0 }}
                                    >
                                        Request Call
                                    </Button>
                                    <Grid item xs={12} justifyContent="center">
                                        <Grid >
                                            {/* <Link href="#" variant="body2">
                                                Already have an account? Sign in
                                            </Link> */}
                                            <Divider>OR</Divider>

                                            <p style={{ textAlign: "center" }}>Direct Call Us for any query</p>

                                        </Grid>
                                    </Grid>
                                    <Button
                                        startIcon={<PhoneForwardedIcon />}
                                        type="submit"
                                        color="success"
                                        fullWidth
                                        variant="contained"
                                        onClick={handleMakeCall}
                                        sx={{ mt: 1, mb: 2, boxShadow: 'none', borderRadius: 0 }}
                                    >
                                        Make Call
                                    </Button>
                                </Box>

                            </Box>

                        </Container>
                    </ThemeProvider>



                </div>

            </div>
        </div>
    )
};

export default Modal;





            // console.log('apiResponse, apiResponse.status', apiResponse, apiResponse.status, apiResponseStatus,emailSend);
             //   setEmailMsg('Thank You For Call Request. We will connect you soon.');
                //}
            // if (emailSendStatus == 200 && apiResponseStatus == 200) {
            //     // setShowAlert(true);
            //     const timer = setTimeout(() => {
            //         setShowAlert(false);
            //     }, 3000);

            //     return () => {
            //         clearTimeout(timer);
            //     };
            // } else {
            //     setEmailMsg('Form was not submitted. Something went wrong.');
            //     setShowAlert(true);
            //     const timer = setTimeout(() => {
            //         setShowAlert(false);
            //     }, 3000);

            //     const timer1 = setTimeout(() => {
            //         setIsModalOpen(false);
            //     }, 3000);

            //     return () => {
            //         clearTimeout(timer, timer1);
            //     };
            // }