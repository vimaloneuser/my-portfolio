import React from "react";
const Projects = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title">Services</h2>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card hover-shadow shadow">
              <div className="card-body text-center px-4 py-5">
                <i className="ti-palette icon mb-5 d-inline-block"></i>
                <h4 className="mb-4">UI Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card active-bg-dark hover-shadow shadow">
              <div className="card-body text-center px-4 py-5">
                <i className="ti-vector icon mb-5 d-inline-block"></i>
                <h4 className="mb-4">UX Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card hover-shadow shadow">
              <div className="card-body text-center px-4 py-5">
                <i className="ti-panel icon mb-5 d-inline-block"></i>
                <h4 className="mb-4">Interaction Design</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
