import React from "react";
import { data } from "../../common/constants";
import { SectionTitle } from "../Heading/Titles";

const Education = () => {
  return (
    <section className="section position-relative">
      <div className="container">
        <div className="row">
          <SectionTitle title="Education" />

          {data.education.map((item, key) => (
            <div className="col-lg-6 col-md-6 mb-80" key={key}>
              <div className="d-flex">
                <div className="mr-lg-5 mr-3">
                  <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
                </div>
                <div>
                  <p className="text-dark mb-1">{item.year}</p>
                  <h4>{item.course}</h4>
                  <p className="mb-0 text-light">{item.univercity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        className="img-fluid edu-bg-image w-100"
        src="assets/images/backgrounds/education-bg.png"
        alt="bg-image"
      />
    </section>
  );
};

export default Education;
