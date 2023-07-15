import React from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react";
import './single-Product.scss';
import { useNavigate } from "react-router";


const SingleProduct = () => {
  const location = useLocation();
  const brandName = location.state?.brandName;
  const category = location.state?.category;
  console.log(category,brandName)

  const [productData, setProductData] = useState([]);
  useEffect(() => {
    console.log("brand:",brandName,"model:","category",category);
    async function fetchData() {
      const result = await axios.get(`${process.env.REACT_APP_Backend_URL}/api/get-category-product?brandName=${brandName}&category=${category}`);
      setProductData(result.data.data);
    }

    fetchData();
  }, [brandName]);

  console.log(productData);

  //for sending data for Model Name
  const navigate = useNavigate();
  const handleModelClick = (MoName) => {
    navigate('/ModelDescription', { state: { ModelName: MoName } });
  };

  return (
    <div>
      <div className="heading-section">
        <h1>Sell Your Old {brandName} {category}</h1>
        <img src={require(`../assets/img/cameras/${category}/${brandName.toLowerCase()}.webp`)} alt="DSLR" />
        <div>path section</div>
      </div>
      {/* div for items */}

      <div className="container" >
        <div className="heading" key="div"><h3>Select Model</h3></div>
        {
          productData.map((product) => (
            <div onClick={() => handleModelClick(product.product_model)} className="item" style={{ boxShadow: '0px 1px 8px 1px rgba(0,0,0,0.08)' }}>
               <img key={`${product._id}-image`} src={require(`../assets/img/cameras/${product.category}/${product.brand.toLowerCase()}/${product.image.toLowerCase()}.webp`)} alt="DSLR " loading="lazy" />
               <p key={`${product._id}-brand`}>{product.brand}</p>
              <p key={`${product._id}-model`}>{product.product_model}</p>
              <p>{product.category}</p>
              <p>{product.image}</p>
            </div>
          ))}
      </div>


    </div>
  );
};

export default SingleProduct;
