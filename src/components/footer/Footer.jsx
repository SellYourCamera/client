import React from "react";
import "./Footer.scss";
import { useEffect } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.powr.io/powr.js?platform=html';
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      document.getElementsByTagName('head')[0].removeChild(script);
    };
  }, []);
  return (
      <div className="footer">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="item">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>

          <div className="item">
            <h1>About</h1>
            <span>
              If you're looking to sell your DSLR camera,
              look no further than our website! We provide a
              safe and reliable platform for photographers to sell
              their equipment quickly and easily. With a wide audience
              of potential buyers and secure payment options,
              you can trust us to help you get the best price for your camera.
            </span>
          </div>
          <div className="item">
            <h1>Contact</h1>
            <span>
            If you prefer to speak with a representative directly,
             you can contact our customer support team by phone.
              Please call our dedicated support line. 
              Our knowledgeable staff will be available during our
               business hours to address your inquiries,
                provide assistance, and answer any questions you may have.
            </span>
          </div>
          <div className="item-instagram">
          <h1>Links</h1>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
            <span>Cookies</span>
            <span>Cookies</span>
            <span>Cookies</span>
            <span>Cookies</span>
          </div>
        </div>

        <div className="bottom">

          <div className="left">
            <span className="logo">Sell Your Camera</span>
            <span className="copyright">
              © Copyright 2023. All Rights Reserved
            </span>
          </div>
          <div className="right">
            {/* <img src={require("../../assets/img/linkedin.png")} alt="linkedin" />
            <img src={require("../../assets/img/instagram.png")}alt="instagram" />
            <img src={require("../../assets/img/linkedin.png")} alt="linkedin" />
            <img src={require("../../assets/img/instagram.png")}alt="instagram" />
            <img src={require("../../assets/img/linkedin.png")} alt="linkedin" /> */}
            <InstagramIcon sx={{scale:'1.5',mx:1.5, color:'#fafafa'}}/>
            <FacebookIcon sx={{scale:'1.5',mx:1.5,color:'#fafafa'}}/>
            <LinkedInIcon sx={{scale:'1.5',mx:1.5,color:'#fafafa'}}/>
            <TwitterIcon sx={{scale:'1.5',mx:1.5,color:'#fafafa'}}/>
           
          </div>
        </div>
      </div>
  );
};

export default Footer;