import React from "react";
import { SectionTitle } from "../Heading/Titles";
import PropTypes from "prop-types";
import { showToast } from "../../common/helpers";

const Contact = ({ heading = false }) => {
  const forRef = React.useRef();
  return (
    <section
      className="section section-on-footer"
      data-background="images/backgrounds/bg-dots.png"
    >
      <div className="container">
        <div className="row">
          {heading && <SectionTitle title="Contact Info" />}
          <div className="col-lg-8 mx-auto">
            <div className="bg-white rounded text-center p-5 shadow-down">
              <h4 className="mb-80">Contact Form</h4>
              <form
                ref={forRef}
                name="myform"
                className="row"
                onSubmit={(e) => {
                  e.preventDefault();
                  showToast({
                    message: "Temporary this feature is clossed",
                    success: false,
                  });
                }}
              >
                <div className="col-md-6">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    className="form-control px-0 mb-4"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control px-0 mb-4"
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control px-0 mb-4"
                    placeholder="Type Message Here"
                    required
                  ></textarea>
                </div>
                <div className="col-lg-6 col-10 mx-auto">
                  <button className="btn btn-primary w-100" type="submit">
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  heading: PropTypes.bool,
};

export default Contact;
