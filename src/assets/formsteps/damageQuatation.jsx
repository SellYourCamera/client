import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useLocation } from "react-router";
import { Navigate, useNavigate } from "react-router";
import './quotation.scss';
import Button from '@mui/material/Button';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Modal from "../../components/modal/homeModal";
import './modal.css';

const Quotation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const location = useLocation([]);
    const { productData, productDetailObj: updatedProductDetailObj } = location.state;
    const [productDetailObj, setProductDetailObj] = useState(updatedProductDetailObj);


    const handleMakeCall = () => {
        window.location.href = 'tel:+91 9557755504'; // Example phone number
    }
  
    const [isModalOpen, setIsModalOpen] = useState(false);
 
    return (
        <div className="quotation-container" >
            <div className="row-1">
            {isModalOpen && <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
                <div className="col-1">
                    <div className="quotation-section">
                        <div className="img-section">
                            {productData.map((product) => (
                                <img src={require(`../img/canon/${product.image}.png`)} alt="canon" />
                            ))}
                        </div>

                        {productData.map((product) => (

                            <div key="content" className="content-section" >
                                {/* <h2 >{product.brand}</h2>
                                <p >{product.product_model}</p>
                                <h1>$ 16000</h1> */}
                                <h2>Glad, You are here</h2>

                                <p>Currently, We cannot estimate the value of your device.</p>
                                <p>Howeever, this is not the end we also buy damege cameras which makes us different.</p>
                                <p> To sell you can call us or fill a form to reuest for call, we contact you as soon as possible.
                                </p>
                                <div onClick={handleOpen} className="report-section">See Device Report</div>
                                {/* <div className="feature-section"><img src={require("../img/quotation-feature.png")} alt="feature" /></div> */}
                            </div>

                        ))}
                    </div>

                    <ToastContainer></ToastContainer>

                    <div className="call-request">
                        <Button
                            startIcon={<ConnectWithoutContactIcon />}
                            onClick={()=>setIsModalOpen(true)}
                            variant="contained"
                            color="primary"
                            sx={{
                                fontSize: '1rem',
                                padding: '0.5rem 1rem',

                            }}
                        >
                            Request Call
                        </Button>
                        <Button
                            variant="contained"
                            color="success"
                            startIcon={<PhoneForwardedIcon />}
                            onClick={handleMakeCall}
                            sx={{
                                fontSize: '1rem',
                                padding: '0.5rem 1rem',
                                marginLeft: '20px'
                            }}
                        > Make Call
                        </Button>
                    </div>

                </div>
                <div className="col-2">
                    {productData.map((product) => (

                        <div className="imgsection" key={product.id} >
                            <img src={require(`../img/canon/${product.image}.png`)} alt="canon" />
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


                    </div>

                </div>
            </div>

            {/* <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal> */}
            {isOpen && (
                <div className="overlay" onClick={handleOverlayClick}>
                    <div className="modal">
                        <div className="header1">
                            <h3>Modal title</h3>
                            <button onClick={handleClose}>Close</button>
                        </div>
                        <div className="content">
                            <p>Modal content goes here</p>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}
export default Quotation;




