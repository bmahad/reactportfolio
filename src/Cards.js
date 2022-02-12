import React, { useState } from "react";
import goku from './images/goku.jpg';
import Dragon from "./API/Dragon";

const Cards = () => {
    const[card,setCard] = useState(Dragon);
    const filterItems = (name1) => {
        const updateSet = card.filter((currElement) => {
            return currElement.name === name1;
        });
        setCard(updateSet);
    }
    return(
        <>
        <div className="gallery-button d-flex p-0">
            <button className="btn btn-primary" onClick={() => filterItems('goku')}>goku</button>
            <button className="btn btn-primary" onClick={() => filterItems('vageta')}>vegeta</button>
            <button className="btn btn-primary" onClick={() => filterItems('gohan1')}>gohan</button>
            <button className="btn btn-primary" onClick={() => setCard(Dragon)}>all</button>
        </div>
        {
            card.map((elem) => {
                const{id,name,image,info} = elem;
                return(
                    <>
                    <div className="col-lg-4" key={id}>
                        <img src={image} className="card-img-top w-75 img-fluid" alt="image" />
                        <div className="card-body">
                            <p className="card-text">{info}</p>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{name}</p>
                        </div>
                    </div>
                    </>
                )
            })
        }
        </>
    )
}
export default Cards;