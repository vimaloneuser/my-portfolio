import React from "react";
import { about } from "../../common/constants";
import Links from "../Links";
const Footer = () => {
  return (
    <footer className="bg-dark footer-section">
            <Links />
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-light">Email</h5>
              <p className="text-white paragraph-lg font-secondary">
                {about.email}
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-light">Phone</h5>
              <p className="text-white paragraph-lg font-secondary">
                {about.phone}
              </p>
            </div>
            <div className="col-md-4">
              <h5 className="text-light">Address</h5>
              <p className="text-white paragraph-lg font-secondary">
                {about.address}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top text-center border-dark py-5">
        <p className="mb-0 text-light">
          Copyright &copy;
          {new Date().getFullYear()} Designed &amp; Developed by{" "}
          <a className="text-white-50" href="Themefisher">
            {about.name}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
