import "./Dslr.scss";
import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Videocameravideo  from "../assets/videos/Video_camera.mp4";

const VideoCamera = () => {

  const navigate = useNavigate();
  const serachData='';
  const filterData='';
  const [brandName, setBrandName] = useState("");
  const category='Video Camera';
  const handleBrandClick = (name) => {
    setBrandName(name);
    navigate('/single-product', { state: { brandName: name , category:category} });
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
            <h2 className="underline-small">Sell Your Old Video Camera.</h2>
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
                <button style={{background:'none', border:'none'}} onClick={() => handleBrandClick('panasonic')}>
                  <img src={require("../assets/img/panasonic.jpeg")} alt="panasonic" />
                </button>
              </li>
              <li className="brandimg">
                <button style={{background:'none', border:'none'}} onClick={() => handleBrandClick('sony')}>
                  <img src={require("../assets/img/sony.jpeg")} alt="sony" />
                </button>
              </li>
             
            </ul>
          </div>
        </div>

        <div className="col-right">
          <div className="imgcontainer">
            {/* <p>Sell your DSLR camera and, Action Camera <br />& Video Camera @ Best Price.</p> */}
            {/* <img src={Sellimg} alt="banner" /> */}
            <video autoPlay loop muted 
            height="400" // Replace with the desired height in pixels
            width="600">
           <source src={Videocameravideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCamera;