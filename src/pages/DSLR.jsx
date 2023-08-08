import "./Dslr.scss";
import React, {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import DSLRVideo from "../assets/videos/DSLRVideo.mp4"

const DSLR = () => {
 
  const [searchResults, setSearchResults] = useState([]); 
  const [dataLength,setDataLength]=useState(0);
  const navigate = useNavigate();
  const serachData='';
  const filterData='';
  const [searchKey,setSearchKey]=useState('');
  const category='DSLR Camera';
  const [brandName, setBrandName] = useState("");
  const handleBrandClick = (name) => {
    setBrandName(name);
    navigate('/single-product', { state: { brandName: name,category: category } });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.sellyourcamera.in/api/search/${searchKey}`);
        console.log("API Response:", response.data,"datalength",dataLength); // Log the entire API response
        setSearchResults(response.data);
        setDataLength(searchResults.data.length); // Assuming the API response has a "results" property
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [searchKey]);
  const handleInputChange = (event) => {
    setSearchKey(event.target.value);
  };





  return (
    <div className="dslrcontainer" >
      <div className="dslr-row">
        <div className="col-left">
          <div className="brandcontainer">
            <h2 className="underline-small">Sell Your Old DSLR Camera on CamMart</h2>
            <form><input type="text" value={searchKey}
        placeholder="Search Brand"
        onChange={handleInputChange} /></form>
            <div className="search-result">
            {dataLength > 0 ? (
    searchResults.data.map((product) => (
      <div
      onClick={() => handleBrandClick(product.brand)}
      key={product.id}
      className="capitalized-div"
    >{product.brand.toLowerCase()}&nbsp;{product.product_model}</div>
    ))
  ) : (
    <p></p>
  )}
            </div>
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
                <button style={{background:'none', border:'none'}} onClick={() => handleBrandClick('fuji film')}>
                  <img src={require("../assets/img/fujifilm.jpeg")} alt="fujifilm" />
                </button>
              </li>
              <li className="brandimg">
                <button style={{background:'none', border:'none'}} onClick={() => handleBrandClick('black magic')}>
                  <img src={require("../assets/img/Blackmagic.jpeg")} alt="balck magic" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-right">
          <div className="imgcontainer">
            <p>Sell your DSLR camera and, Action Camera <br />& Video Camera @ Best Price.</p>
            {/* <img src={Sellimg} alt="banner" /> */}
            <video autoPlay loop muted >
           <source src={DSLRVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DSLR;