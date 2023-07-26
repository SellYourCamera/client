import * as React from 'react';
import './WhyTrustUs.css';
import Button from '@mui/material/Button';

const WhyTrustUs = ({ isModalOpen, setIsModalOpen }) => {
    const handleCallRequest = () => {
        setIsModalOpen(true);}

    return (
        <div className='trust-section'>
        <div className='trust-row'>
            <div className='col-2'>
                <img src={require("../assets/img/handshake.png")} alt='sellyourcamera'/>
            </div>
            <div className='col-1'>
                <div className='heading'> <h2 style={{color:"#f1f1f1"}}>At SYC, we have built a strong reputation as a trusted platform for buying and selling cameras.</h2></div>
                <div className='content'> <p>We have implemented a verification process for both buyers and sellers on our platform. This ensures that you are connecting with genuine individuals
                     who are genuinely interested in buying or selling cameras.
                      By verifying user accounts, we minimize the risk of fraudulent activity and provide a 
                      safer environment for transactions.</p></div>
                <div className='component'>
                    <Button
                        variant="contained"
                        startIcon=""
                        onClick={handleCallRequest}
                        sx={{
                            fontSize: '1rem',
                            padding: '0.6rem 2.5rem',
                            border: "1.5px solid #fafafa",
                            color:"#fafafa",
                            margin:"0px",
                            boxShadow:"none",
                            fontWeight:550,
                            borderRadius:0,
                            backgroundColor: 'transparent',
                            "&:hover": {
                                backgroundColor:'#fafafa',
                                color: '#1876d3',
                                
                                boxShadow:'none',
                              },
                          }}
                       
                    > Sell Now
                    </Button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default WhyTrustUs;
