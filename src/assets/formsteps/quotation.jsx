import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useLocation } from "react-router";
import { Navigate, useNavigate } from "react-router";
import './quotation.scss';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './modal.css';

//LoginModal

import PropTypes from "prop-types";
import clsx from "clsx";
import { styled, Box } from "@mui/system";

import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";

import { RecaptchaVerifier, signInWithPhoneNumber, connectAuthEmulator } from "firebase/auth";
import { MuiTelInput, matchIsValidTel } from 'mui-tel-input';
import { MuiOtpInput } from 'mui-one-time-password-input'
import CircularProgress from '@mui/joy/CircularProgress';
import { auth } from "../../components/Authentication/firebase";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';
const Quotation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => {
        setIsOpen(false);
        setShowOtp(false);
    };

    useEffect(() => {


        // Trigger the modal after 3 seconds
        const timeoutId = setTimeout(() => {
            setIsOpen(true);
        }, 3000); // 3000 milliseconds = 3 seconds

        // Clean up the timeout when the component unmounts or when isModalOpen changes
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    const location = useLocation([]);
    const { productData, productDetailObj: updatedProductDetailObj } = location.state;
    const [productDetailObj, setProductDetailObj] = useState(updatedProductDetailObj);


    //MOdal functions


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




    return (
        <div className="quotation-container" >
            <div className="row-1">
                <div className="col-1">
                    <div className="quotation-section">
                        <div className="img-section">
                            {productData.map((product) => (
                                <img src={require(`../img/cameras/${product.category}/${product.brand.toLowerCase()}/${product.product_model.toLowerCase()}.webp`)} alt="DSLR" />
                            ))}
                        </div>

                        {productData.map((product) => (

                            <div key="content" className="content-section" >
                                <h2 >{product.brand}</h2>
                                <p >{product.product_model}</p>
                                {user ? (
            <h1>&#x20B9; {product.price}</h1>
        ) : (
            <h1>&#x20B9; XXXX</h1>
        )}
                                <div >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleOpen}
                                        sx={{
                                            fontSize: '1rem',
                                            padding: '0.3rem 3rem',
                                            marginLeft: '10px',
                                            borderRadius: '0px',
                                            boxShadow: 'none'
                                        }}
                                    >    SELL</Button></div>
                                <div className="feature-section"><img src={require("../img/quotation-feature.png")} alt="feature" /></div>
                            </div>

                        ))}
                    </div>

                    <ToastContainer></ToastContainer>

                </div>
                <div className="col-2">
                    {productData.map((product) => (

                        <div className="imgsection" key={product.id} >
                            <img src={require(`../img/cameras/${product.category}/${product.brand.toLowerCase()}/${product.product_model.toLowerCase()}.webp`)} alt="DSLR" />
                            <div key="content" className="content-section" >
                                <h3 >{product.brand}</h3>
                                <p >{product.product_model}</p>
                            </div>
                        </div>

                    ))}

                    <div className="camera-evalution">
                        <label><CameraAltIcon color="primary" /><span>Camera Evalution</span></label>
                        {productDetailObj.cameraSwitchOn && <div><h3>Does Camera Switch On ?</h3><li>{productDetailObj.cameraSwitchOn}</li></div>}
                        {productDetailObj.functionalIssue && <div><h3>Any Functional Issue ?</h3><li>{productDetailObj.functionalIssue}</li></div>}
                        {productDetailObj.physicalCondition && <div><h3>Any Physical Damage ?</h3><li>{productDetailObj.physicalCondition}</li></div>}
                        {productDetailObj.additionalLens && <div><h3>Any Additional Lens ?</h3><li style={{ margin: "0px 0px 8px 28px" }}>{productDetailObj.additionalLens}</li>
                            <div className='other-data'><label style={{ margin: "16px 0px 5px 28px" }}>Lenses</label> {productDetailObj.cameraLens.map((lenses, index) => (
                                <li style={{ margin: "0px 0px 10px 45px" }} key={index}>{lenses} </li>
                            ))}
                            </div></div>}
                        {productDetailObj.cameraAccessories &&
                            <div><h3>Accessories</h3> {productDetailObj.cameraAccessories.map((accessories, index) => (
                                <li style={{ margin: "0px 0px 10px 45px" }} key={index}>{accessories}, </li>
                            ))}
                            </div>
                        }


                    </div>

                </div>
            </div>



            {isOpen && (
                <StyledModal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={isOpen}
                    onClose={handleClose}
                    slots={{ backdrop: StyledBackdrop }}
                >
                    <Box sx={style}>
                    {productData.map((product) => (
                        <Card sx={{ display: "flex",flexDirection:'row',justifyContent:'center' }}>
                           

                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <CardContent sx={{ flex: "1 0 auto" }}>
                                        <Typography component="div" variant="h5">
                                            {product.brand}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            {product.product_model}
                                        </Typography>

                                    </CardContent>
                                    <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1, marginLeft: '10px' }}>
                                        <Typography>Rs: </Typography><h1 style={{ color: '#1876d2', marginLeft: '5px' }}>{" "}XXXX</h1>
                                    </Box>




                                </Box>
                            

                            <CardMedia
                                component="img"
                                sx={{ width: 200,height:'auto',float:'right', marginLeft:'50px',padding:'10px' }}
                                // image="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                               image={require(`../../assets/img/cameras/${product.category}/${product.brand.toLowerCase()}/${product.product_model.toLowerCase()}.webp`)}
                                alt='${product.category}'
                            />
                            
                        </Card>
                        ))}
                        <div style={{
                            bgcolor: 'red',
                            display: 'flex',
                            alignItems: 'center',
                            height: '100px'

                        }}>
                            <Avatar sx={{ m: 1, bgcolor: 'primary.main', }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography><h2 style={{ color: '#1876d2' }}>Login To Check Price</h2></Typography>
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
                           <h1>login successfull</h1>

                        )}
                        </div>



                        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
                        {/* </Container> */}
                        <p id="unstyled-modal-description">Hurrray, Just One step away!</p>
                    </Box>
                </StyledModal>
            )}
        </div>

    )
}
export default Quotation;





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
    borderColor: 'transparent',
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
