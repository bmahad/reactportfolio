import React from 'react';
import html1 from '../images/html1.png';
import css1 from '../images/css1.png'
import boots1 from '../images/boots1.png';
import sass1 from '../images/sass1.png';
import reacts from '../images/react1.png';
import js from '../images/js1.png';
import word1 from '../images/word1.png';
import figma from '../images/figma1.png';
import xd from '../images/xd1.png';
import firebase from '../images/fire1.png';

const Slider = () => {
    return(
        <>
        <div className='container custom-m-t'>
            <h1 className='custom-text-slider'>Technologies</h1>
            <p className='pt-2 text-center'>My Work Technologies</p>
                            <div className='row py-5'>
                                <div className='col-md-3 col-12'>
                                     <img class="d-block custom-fluid" src={html1} alt="First slide"/>
                                </div>
                                <div className='col-md-3 col-12 py-2'>
                                     <img class="d-block custom-fluid" src={css1} alt="First slide"/>
                                </div>
                                <div className='col-md-3 col-12'>
                                     <img class="d-block custom-fluid" src={boots1} alt="First slide"/>
                                </div>
                                <div className='col-md-3 col-12 py-2'>
                                     <img class="d-block custom-fluid" src={sass1} alt="First slide"/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-3 col-12'>
                                     <img class="d-block custom-fluid" src={reacts} alt="First slide"/>
                                </div>
                                <div className='col-md-3 col-12 py-2'>
                                     <img class="d-block custom-fluid" src={js} alt="First slide"/>
                                </div>
                                <div className='col-md-3 col-12'>
                                     <img class="d-block custom-fluid" src={word1} alt="First slide"/>
                                </div>
                                <div className='col-md-3 col-12 pt-2'>
                                     <img class="d-block custom-fluid" src={figma} alt="First slide"/>
                                </div>
                            </div>
                            <div className='row py-5'>
                                <div className='col-md-3 col-12'>
                                     <img class="d-block custom-fluid" src={xd} alt="First slide"/>
                                </div>
                                <div className='col-md-3 col-12 pt-4'>
                                     <img class="d-block custom-fluid" src={firebase} alt="First slide"/>
                                </div>
                            </div>
                        </div>
        </>
    )
}
export default Slider;