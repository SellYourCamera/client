import React from "react";
import "./Footer.scss";
import { useEffect } from "react";

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
    <div className="footer-section">
      <div className="footer">
        <div className="top">
          <div className="item">
            <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>

            {/* <div style={{display:'flex',flexDirection:'column'}} class="powr-social-feed" id="ea29545d_1687576896"></div>
            {/* <div className="embedsocial-hashtag" data-ref="6444b61ee00ac70b7a073d0be93f092c51dc4c5d">
          <a
            className="feed-powered-by-es feed-powered-by-es-feed-new"
            href="https://embedsocial.com/social-media-aggregator/"
            target="_blank"
            title="Widget by EmbedSocial"
          >
            Widget by EmbedSocial<span>→</span>
          </a>
         </div> */} 
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
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
              amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
              ut labore etdolore.
            </span>
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
            {/* <img src="/img/payment.png" alt="payment" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

//https://codepen.io/baahubali92/pen/KbRBxJ

export default Footer;