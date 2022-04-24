import React from "react";
import { Link, useParams } from "react-router-dom";
import { navMenu, route } from "../../common/constants";

const Header = () => {
  const params = useParams();
  return (
    <header className="navigation fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark nav-custom ">
        <Link className="navbar-brand font-tertiary h3 nav-custom-flex1" to={route.home}>
          <img
            src="assets/images/logo.png"
            className="custom-logo"
            alt="Myself"
          />
        </Link>
        <button
          className="navbar-toggler nav-custom-flex1"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-center" id="navigation">
          <ul className="navbar-nav ml-auto">
            {navMenu.map((menu, key) => (
              <li className={`nav-item ${params === menu.route}`} key={key}>
                <Link data-toggle="collapse" data-target=".navbar-collapse.show"  to={menu.route} className="nav-link">
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
