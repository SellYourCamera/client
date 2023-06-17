import Sellimg from "../assets/img/Sellimg.jpg";
import "./Dslr.scss";
import React, {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const DSLR = () => {

  const navigate = useNavigate();
  const serachData='';
  const filterData='';
  const category='DSLR Camera';
  console.log('categiory',category);
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
            <h2 className="underline-small">Sell Your Old DSLR Camera on CamMart</h2>
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
                <button style={{background:'none', border:'none'}} onClick={()=>handleBrandClick("canon")}>
                  <img src={require("../assets/img/canon.jpeg")} alt="canon" />
                </button>
              </li>
              <li className="brandimg">
                <button style={{background:'none', border:'none'}} onClick={() => handleBrandClick('nikon')}>
                  <img src={require("../assets/img/nikon.jpeg")} alt="nikon" />
                </button>
              </li>
              <li className="brandimg">
                <button style={{background:'none', border:'none'}} onClick={() => handleBrandClick('panasonic')}>
                  <img src={require("../assets/img/panasonic.jpeg")} alt="panasonic" />
                </button>
              </li>
              <li className="brandimg">
                <button style={{background:'none', border:'none'}} onClick={() => handleBrandClick('sony')}>
                  <img src={require("../assets/img/sony.jpeg")} alt="sony" />
                </button>
              </li>
              <li className="brandimg">
                <button style={{background:'none', border:'none'}} onClick={() => handleBrandClick('fujifilm')}>
                  <img src={require("../assets/img/fujifilm.jpeg")} alt="fujifilm" />
                </button>
              </li>
              <li className="brandimg">
                <button style={{background:'none', border:'none'}} onClick={() => handleBrandClick('black magic design')}>
                  <img src={require("../assets/img/Blackmagic.jpeg")} alt="balck magic design" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-right">
          <div className="imgcontainer">
            <p>Sell your DSLR camera and, Action Camera <br />& Video Camera @ Best Price.</p>
            <img src={Sellimg} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DSLR;