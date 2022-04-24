import React from "react";
import { Link } from "react-router-dom";
import { about, route } from "../../common/constants";

const Introduction = () => {
  return (
    <React.Fragment>
      <section className="hero-area bg-dark" id="parallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <h1 className="text-white font-tertiary">
                Hi! I’m <br /> {about.name} <br />
                Web <span className="text-success border" >(MERN Stack)</span> , Mobile App Developer
              </h1>
            </div>
          </div>
        </div>
        <div className="layer-bg w-100">
          <img
            className="img-fluid w-100"
            src="assets/images/illustrations/leaf-bg.png"
            alt="bg-shape"
          />
        </div>
        <div className="layer" id="l2">
          <img src="assets/images/illustrations/dots-cyan.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l3">
          <img
            src="assets/images/illustrations/leaf-orange.png"
            alt="bg-shape"
          />
        </div>
        <div className="layer" id="l4">
          <img
            src="assets/images/illustrations/dots-orange.png"
            alt="bg-shape"
          />
        </div>
        <div className="layer" id="l5">
          <img
            src="assets/images/illustrations/leaf-yellow.png"
            alt="bg-shape"
          />
        </div>
        <div className="layer" id="l6">
          <img src="assets/images/illustrations/leaf-cyan.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l7">
          <img
            src="assets/images/illustrations/dots-group-orange.png"
            alt="bg-shape"
          />
        </div>
        <div className="layer" id="l8">
          <img
            src="assets/images/illustrations/leaf-pink-round.png"
            alt="bg-shape"
          />
        </div>
        <div className="layer" id="l9">
          <img
            src="assets/images/illustrations/leaf-cyan-2.png"
            alt="bg-shape"
          />
        </div>
        <ul className="list-unstyled ml-5 mt-3 position-relative zindex-1">
          <li className="mb-3">
            <a className="text-white" href="https://themefisher.com/">
              <i className="ti-facebook"></i>
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white" href="https://themefisher.com/">
              <i className="ti-instagram"></i>
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white" href="https://themefisher.com/">
              <i className="ti-dribbble"></i>
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white" href="https://themefisher.com/">
              <i className="ti-twitter"></i>
            </a>
          </li>
        </ul>
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto text-center">
              <p className="font-secondary paragraph-lg text-dark">
                {about.briefIntroduction}
              </p>
              <Link to={route.about} className="btn btn-transparent bg-primary text-light ">
                know more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Introduction;
