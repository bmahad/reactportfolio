import React from "react";
import image1 from './images/hero3.jpeg';
import image2 from './images/hero4.jpg'

const Header = () => {
    return(
        <>
          <header>
              <section className="container main-hero-container">
                  <div className="row">
                      <div className="d-flex justify-content-center flex-column align-items-start col-12 col-lg-6 header-left-side">
                          <h1 className="display-3">Online Payments For <br/> Easy For You</h1>
                          <p className="main-hero-para">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                          </p>
                          <h3>Get early access for you</h3>
                          <div className="input-group mt-3">
                                <input type="text" className="rounded-pill w-75 me-3 form-control-text p-2" placeholder="Enter your email"/>
                                <div className="input-group-text">
                                    Get it now
                                </div>
                          </div>
                      </div>
                      <div className="main-hersection-images d-flex justify-content-center flex-column align-items-start col-12 col-lg-6 header-right-side">
                          <img src={image1} alt="image" className="img-fluid"/>
                          <img src={image2} alt="image" className="img-fluid main-hero-img2"/>
                      </div>
                  </div>
              </section>
          </header>
        </>
    )
}
export default Header;