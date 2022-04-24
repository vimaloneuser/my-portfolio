import React from "react";
import { about } from "../../common/constants";
const About = () => {
  return (
    <React.Fragment>
      <section className="page-title-alt bg-dark position-relative custom-overflow-hidden">
        <div className="container">
          <div className="row">
          <div className="col-12">
              <h1 className="text-white font-tertiary">About Me</h1>
            </div>
          </div>
        </div>
        <img
          src="assets/images/illustrations/leaf-bg-top.png"
          alt="illustrations"
          className="bg-shape-1 w-100"
        />
        <img
          src="assets/images/illustrations/dots-group-sm.png"
          alt="illustrations"
          className="bg-shape-2"
        />
        <img
          src="assets/images/illustrations/leaf-yellow.png"
          alt="illustrations"
          className="bg-shape-3"
        />
        <img
          src="assets/images/illustrations/leaf-orange.png"
          alt="illustrations"
          className="bg-shape-4"
        />
        <img
          src="assets/images/illustrations/dots-group-cyan.png"
          alt="illustrations"
          className="bg-shape-5"
        />
        <img
          src="assets/images/illustrations/leaf-cyan-lg.png"
          alt="illustrations"
          className="bg-shape-6"
        />
      </section>

      <section className="section pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {about.about.map((item, key) => (
                !item?.bold?<p key={key}>{item.detail}</p>:<p key={key}><b>{item.detail}</b></p>
              ))}
            </div>
            <div className="col-md-4 text-center drag-lg-top">
              <div className="shadow-down mb-4">
                <img
                  src="assets/images/about/author.jpg"
                  alt="author"
                  className="img-fluid w-100 rounded-lg border-thick border-white"
                />
              </div>
              <h4>{about.name}</h4>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
