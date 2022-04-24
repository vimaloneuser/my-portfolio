import React from "react";
import { SectionTitle } from "../Heading/Titles";
import PropTypes from "prop-types";
import { data } from "../../common/constants";

const Experience = ({ heading = false }) => {
  return (
      <section className="section">
        <div className="container">
          <div className="row justify-content-around">
            {heading && <SectionTitle title="Experience" />}

            {data.experience.map((item, key) => (
              <div className="col-lg-3 col-md-4 text-center" key={key}>
                <img src={item.image} alt="icon" />
                <p className="mb-0">{item.year}</p>
                <h4>{item.designation}</h4>
                <h6 className="text-light">{item.company}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

Experience.propTypes = {
  heading: PropTypes.bool,
};

export default Experience;
