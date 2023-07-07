import React from "react";
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import './About.css';
// import GoogleMapembedd from "./GoogleMap";

const Contact = () => {
    return (
        <div className="about-section">

            <h2 style={{ marginTop: '50px', textAlign: 'center' }}> Thank you for your interest in contacting Sellyourcamera.in!  </h2>
            <h2 style={{ margin: '-10px', color: '#1876d2', textAlign: 'center' }}>We value your feedback, inquiries, and suggestions.</h2>

            <div className="about">
                <div className="about-row">
                    <div className="col">
                        <div className="content">
                            <h2>We always try to get in touch with you.</h2>
                            <p>
                                We have implemented a verification process for both buyers and sellers on our platform. This ensures that you are connecting with genuine individuals
                                who are genuinely interested in buying or selling cameras.
                                By verifying user accounts, we minimize the risk of fraudulent activity and provide a
                                safer environment for transactions.
                            </p>
                            <p>Connect with us on our social media channels including Facebook, Instagram, and Twitter. You can direct message us on these platforms, and we'll be happy to assist you with your queries.</p>
                            <p>Our customer support team is available to address any specific concerns or technical issues you may have. Simply send an email to support@sellyourcamera.in, and we'll provide you with the necessary assistance.</p>
                        </div>
                    </div>
                    <div className="col">
                        <img style={{ height: '400px', width: 'auto' }} src={require("../assets/img/about/connect_us.jpg")} alt="..." />
                    </div>
                </div>

                <div style={{ margin: '40px 0px' }} className="about-row">
                    <div className="col1">
                        <div className="content1">
                            <h1><EmailOutlinedIcon sx={{ scale: '3', color: '#1876d2' }} /></h1>
                            <h2>Mail Us</h2>
                            <a href="mailto:vg9557755504@gmail.com">vg9557755504@gmail.com</a>
                        </div>
                    </div>
                    <div className="col1">
                        <div className="content1">
                            <h1><CallOutlinedIcon sx={{ scale: '3', color: '#1876d2' }} /> </h1>
                            <h2>Call Us</h2>
                            <a href="tel:+91 9557755504">+91 9557755504</a>
                        </div>
                    </div>

                    <div className="col1">
                        <div className="content1">
                            <h1><PinDropOutlinedIcon sx={{ scale: '3', color: '#1876d2' }} /></h1>
                            <h2>Reach Us</h2>
                            <a>82F9+62M, 98/1, Govind Garh Rd, Shriram Puram Colony</a>
                        </div>
                    </div>
                </div>

                <div className="about-row">
                    <div className="col">
                        <img style={{ height: '400px', width: 'auto' }} src={require("../assets/img/about/call_us.png")} alt="..." />
                    </div>
                    <div className="col">
                        <div className="content">
                            <h2>Connect us at your free will.</h2>
                            <p>
                                We are committed to providing excellent customer service and ensuring your experience with Sellyourcamera.in is seamless and enjoyable. We strive to respond to all inquiries in a timely manner, typically within 24-48 hours.
                            </p>
                            <p>We genuinely value your feedback and strive to continuously improve our platform based on your suggestions. Your satisfaction is our top priority, and we're committed to providing excellent customer service. Please be assured that we will do our utmost to address your queries and concerns promptly and effectively.</p>
                        </div>
                    </div>

                </div >

                <div>

                    <h2 style={{ marginTop: '50px', textAlign: 'center', color: '#1876d2' }}>Thank you for choosing Sellyourcamera.in.</h2>
                    <h2 style={{ marginTop: '-0px', textAlign: 'center' }}> We look forward to hearing from you and assisting you in any way we can!</h2>
                    {/* <div>
                        <GoogleMapembedd />
                    </div> */}
                </div>
            </div>
            </div>

            )
};

            export default Contact;