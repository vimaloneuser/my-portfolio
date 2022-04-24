import React, { useEffect } from "react";
import $ from "jquery";
import { SectionTitle } from "../Heading/Titles";
import { data } from "../../common/constants";

const Skills = () => {
  const jqueryAnimations = () => {
    // Background-images
    $("[data-background]").each(function () {
      $(this).css({
        "background-image": "url(" + $(this).data("background") + ")",
      });
    });

    // background color
    $("[data-color]").each(function () {
      $(this).css({
        "background-color": $(this).data("color"),
      });
    });

    // progress bar
    $("[data-progress]").each(function () {
      $(this).css({
        bottom: $(this).data("progress"),
      });
    });
  };

  useEffect(() => {
    jqueryAnimations();
  }, []);

  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="row">
            <SectionTitle title="Skills" />
            {data.skills.map((item, key) => (
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0" key={key}>
                <div className="card shadow text-center">
                  <div
                    className="position-relative rounded-top progress-wrapper"
                    data-color={item.color}
                  >
                    <div
                      className="wave"
                      data-progress={`${item.level}%`}
                    ></div>
                  </div>
                  <div className="card-footer bg-white">
                    <h4 className="card-title">{`${item.title} (${item.level}%)`}</h4>
                  </div>
                </div>
              </div>
            ))}
            {data.technologies.map((item, key) => (
              <div
                className="col-lg-2 col-sm-3 col-xs-6 mb-2 mt-2 mb-lg-0"
                key={key}
              >
                <div className="card shadow text-center p-1">
                  <div
                    className="position-relative rounded-top progress-wrapper-technology"
                    data-color="#F2F2F2"
                  >
                    <img src={item.image} alt="technology" />
                  </div>
                  <div className="card-footer bg-white">
                    <h5 className="card-title">{`${item.title}`}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-download w-100">
            <a
              href="assets/resume/vimal_patel_developer.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-warning"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Skills;
