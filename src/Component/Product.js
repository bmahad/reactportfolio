import React from "react";
import splash from '../images/commerce.png';

const Product = ({image,link}) => {
    return(
        <>
        <div className="p-card">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                {/* <div className="p-circle"></div> */}
            </div>
            <a href={link} target="_blank">
                <img src={image} alt="images" className="p-image"/>
            </a>
        </div>
        </>
    )
}
export default Product;