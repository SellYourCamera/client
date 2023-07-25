import Sellimg from "../assets/img/Sellimg.jpg";
import "./Dslr.scss";
import React, {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Actioncamera from '../assets/videos/Action_camera.mp4'

const ActionCamera = () => {

  const navigate = useNavigate();
  const serachData='';
  const filterData='';
  const category='Action Camera';
  const [brandName, setBrandName] = useState("");
  const handleBrandClick = (name) => {
    setBrandName(name);
    navigate('/single-product', { state: { brandName: name,category: category } });
  };
  

  // useEffect(()=>{
  //     data= axios.get(`${REACT_APP_Backend_URL}/api/searchdata`);
  //     data
  // })
  const handlesSearchChange = (e) =>({

   

  })

  


  return (
    <div className="dslrcontainer" >
      <div className="dslr-row">
        <div className="col-left">
          <div className="brandcontainer">
            <h2 className="underline-small">Sell Your Old Action Camera.</h2>
            <form><input type="text" placeholder="Search Brand" onChange={handlesSearchChange} /></form>
            {/* <div className="search-result">
              <div>A</div>
              <div>B</div>
              <div>C</div>
            </div> */}
            <h4 className="category"> or Choose Gadget Brand</h4>
            {brandName}
            <ul>
              <li className="brandimg">
                <button style={{background:'none', border:'none'}} onClick={()=>handleBrandClick("DJI")}>
                  <img src={require("../assets/img/cameras/Action Camera/dji.webp")} alt="DJI" />
                </button>
              </li>
              <li className="brandimg">
                <button style={{background:'none', border:'none'}} onClick={() => handleBrandClick('GOPRO')}>
                  <img src={require("../assets/img/cameras/Action Camera/gopro.webp")} alt="GOPRO" />
                </button>
              </li>
              <li className="brandimg">
                <button style={{background:'none', border:'none'}} onClick={() => handleBrandClick('INSTA360')}>
                  <img src={require("../assets/img/cameras/Action Camera/insta360.webp")} alt="INSTA360" />
                </button>
              </li>
             
            </ul>
          </div>
        </div>

        <div className="col-right">
          <div className="imgcontainer">
            {/* <p>Sell your DSLR camera and, Action Camera <br />& Video Camera @ Best Price.</p>
            <img src={Sellimg} alt="banner" /> */}
             <video autoPlay loop muted >
           <source src={Actioncamera} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionCamera;