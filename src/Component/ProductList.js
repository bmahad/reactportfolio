import React from "react";
import Product from "./Product";
import { DataList } from "../Data";

const ProductList = () => {
    return(
        <>
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">My Portfolio</h1>
                <p className="pl-desc">
                You can see my work here.
                </p>
            </div>
            <div className="pl-list">
                {
                    DataList.map((item) => (
                        <Product 
                         key={item.id}
                         image={item.image}
                         link={item.link}
                        />
                    ))
                }
            </div>
        </div>
        </>
    )
}
export default ProductList;