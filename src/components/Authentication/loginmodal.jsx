import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, Box } from "@mui/system";
import Modal from "@mui/base/Modal";

import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber, connectAuthEmulator } from "firebase/auth";
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { MuiOtpInput } from 'mui-one-time-password-input'
import CircularProgress from '@mui/joy/CircularProgress';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from "./firebase";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';
import {useEffect} from 'react';

export default function LoginModal(isModalOpen, closeModal, productData) {
    const [isOpen, setIsOpen] = React.useState(false);
    useEffect(() => {
        if (isModalOpen) {
            setShowOtp(false);
        }
    }, [isModalOpen]);
    
    // const handleClose = () => {
    //     setIsOpen(false);
    //     setIsModalOpen(false);
    //     console.log("modal off",isModalOpen)
    //     };
        const handleClose = () => {
            // Close the modal by calling the callback function
            setIsOpen(false);
            closeModal();
        };

    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [phone, setPhone] = useState('');
    const [showOtp, setShowOtp] = useState(false);
    const [user, setUser] = useState(null);
    const [phoneError, setPhoneError] = useState(false);

    const handleOtp = (newValue) => {
        setOtp(newValue);
    }
    const handlePhoneChange = (newPhone) => {
        setPhone(newPhone);
    }

    const handlePhoneFocus = () => {
        if (!phone) {
            setPhoneError(true);
        }
    }

    const handlePhoneBlur = () => {
        if (!matchIsValidTel(phone)) {
            setPhoneError(true);
        } else {
            setPhoneError(false);
        }
    }

    const onCaptchVerify = () => {
        if (!window.recaptchaVerifier) {

            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                    onSignInSubmit();
                },
                'expired-callback': () => {
                    // Response expired. Ask user to solve reCAPTCHA again.
                    // ...
                }
            }, auth);
        }
    }

    const onSignInSubmit = () => {

        setLoading(true);

        onCaptchVerify();
        const phoneNumber = phone;

        console.log(phoneNumber);

        const appVerifier = window.recaptchaVerifier;

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                setLoading(false);
                setShowOtp(true);
                toast.success("Otp Send to Your Phone")
            }).catch((error) => {
                console.log(error);
                setLoading(false);
                toast.error("something wrong")

            });


    }

    const otpVerify = () => {
        setLoading(true);
        window.confirmationResult.confirm(otp).then(async (res) => {
            // User signed in successfully.
            console.log(res);
            setUser(res.user);
            setLoading(false);

        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            console.log(error);
            setLoading(false);
        });
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        toast.success("Thankyou to join Us.")
    }

    return (
        <div>

            {/* <TriggerButton type="button" onClick={handleOpen}>
                Open modal
            </TriggerButton> */}
            <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={isModalOpen}
            onClose={handleClose}
            slots={{ backdrop: StyledBackdrop }}
        >
                <Box sx={style}>
                    <Card sx={{ display: "flex" }}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                   
                             <CardContent sx={{ flex: "1 0 auto" }}>
                             <Typography component="div" variant="h5">
                              
                             </Typography>
                             <Typography
                                 variant="subtitle1"
                                 color="text.secondary"
                                 component="div"
                             >
                                
                             </Typography>
                           
                         </CardContent>
                         <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 ,marginLeft:'10px'}}>
                             <Typography>Rs: </Typography><h1 style={{color:'#1876d2',marginLeft:'5px'}}>{" "}XXXX</h1>
                         </Box>
                   
                           
                        
                           
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 150 }}
                            image="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                            alt="Live from space album cover"
                        />
                    </Card>
                   <div style={{
                    bgcolor:'red',
                    display:'flex',
                    alignItems:'center',
                    height:'100px'
                    
                   }}>
                     <Avatar sx={{ m: 1, bgcolor: 'primary.main', }}>
                        <LockOutlinedIcon />
                    </Avatar> 
                    <Typography><h2 style={{color:'#1876d2'}}>Login To Check Price</h2></Typography>
                    </div>
                    {/* <Container component="main" maxWidth="xs"> */}
                    <CssBaseline />
                    <div>
                        <ToastContainer />
                        <div id='recaptcha-container'></div>
                    </div>
                    <div>{!user ? (

                        !showOtp ? (

                            <Box
                                sx={{
                                    marginTop: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <MuiTelInput

                                    required
                                    fullWidth
                                    id="phone"

                                    name="phone"
                                    autoComplete="phone"
                                    label="Phone Number"

                                    onChange={handlePhoneChange}
                                    onFocus={handlePhoneFocus}
                                    onBlur={handlePhoneBlur}
                                    helperText={!matchIsValidTel(phone) && !phone && phoneError ? "Phone number is required" : ""}

                                    defaultCountry="IN"
                                    display="flex"
                                    value={phone}

                                    error={phoneError && !matchIsValidTel(phone)} // Check if the phone number is not valid
                                    sx={{
                                        '& .MuiInputBase-root.Mui-error': { // Styles for invalid input
                                            '& .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'red', // Change the border color to red for invalid input
                                            },
                                            '& .MuiOutlinedInput-input': {
                                                color: 'red', // Change the input text color to red for invalid input
                                            },
                                        },
                                    }}
                                />
                                <Button type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={onSignInSubmit} >
                                    {loading && <CircularProgress variant="soft" size='sm' color="primary" />}
                                    <span style={{ margin: "0px 8px" }}> Send Otp to Mobile</span>
                                </Button>
                            </Box>

                        ) : (
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >

                                <Typography component="h1" variant="h5">
                                    Enter Otp
                                </Typography>
                                <Box component="form" noValidate sx={{ mt: 1 }}>

                                    <MuiOtpInput
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="otp"
                                        label="Email Otp"
                                        name="otp"
                                        autoComplete="phone"
                                        autoFocus
                                        value={otp}
                                        length={6}
                                        onChange={handleOtp} />

                                    <div>
                                        <Button type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            onClick={otpVerify}>
                                            {/* {loading && <CircularProgress variant="soft" size='sm' color="primary" />} */}
                                            <span style={{ margin: "0px 8px" }}> Verify Otp</span>
                                        </Button>
                                    </div>
                                 
                                </Box>
                            </Box>
                        )
                    ) : (
                       handleSubmit()

                    )}
                    </div>



                    {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
                    {/* </Container> */}
                    <p id="unstyled-modal-description">Hurrray, Just One step away!</p>
                </Box>
            </StyledModal>
        </div>
    );

}

LoginModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    setIsModalOpen: PropTypes.func.isRequired,
    productData: PropTypes.object.isRequired
};

const Backdrop = React.forwardRef((props, ref) => {
    const { open, className, ...other } = props;
    return (
        <div
            className={clsx({ "MuiBackdrop-open": open }, className)}
            ref={ref}
            {...other}
        />
    );
});

Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool
};

const blue = {
    200: "#99CCF3",
    400: "#3399FF",
    500: "#007FFF"
};

const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f"
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border:none;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
    width: 450,
    borderColor:'transparent',
    borderRadius: "10px",
    padding: "16px 32px 24px 32px",
    backgroundColor: theme.palette.mode === "dark" ? "#0A1929" : "white",
    boxShadow: `0px 0px 0px ${theme.palette.mode === "dark" ? "#000" : "#383838"}`
});

const TriggerButton = styled("button")(
    ({ theme }) => `
  font-family: now;
  font-size: regular;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 6px 12px;
  line-height: 1.5;
  background: transparent;
  border: 0px  ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[100] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
     border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:focus-visible {
     border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
  `
);
