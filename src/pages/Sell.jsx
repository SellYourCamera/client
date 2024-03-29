import React from "react";
import Sellimg from "../assets/img/Sellimg.jpg";
import DSLR from "../assets/icons/DSLR.svg";
import ActionCamera from "../assets/icons/Action Camera.svg";
import VideoCamera from "../assets/icons/Video Camera.svg";
import { Link } from 'react-router-dom';

const Sell = () => {
    return (

  <div className="sell-row">
    <div className="col">
    <img src={Sellimg} alt="Selling Img" className="image-fluid sellimg" />
    </div>
    <div className="col">
        
    <div className="heading">
        Select The Category:
    </div>
    <div className="parent-item">
    <Link to="/DSLR" target="_self" rel="noreferrer">
    <div className="item">
        <img src={DSLR} alt="DSLR" />
        <p className="cam">DSLR</p>
        </div>
    </Link>
    <Link to="/Action-camera" target="_self" rel="noreferrer">
    <div className="item">
        <img src={ActionCamera} alt="ActionCamera" />
        <p className="cam">Action Camera</p>
    </div>
    </Link>
    <Link to="/video-camera" target="_self" rel="noreferrer">
    <div className="item">
    <img src={VideoCamera} alt="VideoCamera" />
    <p className="cam">Video Camera</p>
    </div>
    </Link>
    </div>

</div>
</div>

    )
};

export default Sell;