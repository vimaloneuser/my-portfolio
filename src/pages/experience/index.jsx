import React from "react";
import Experience from "../../components/Experience";
import Heading from "../../components/Heading";
import Skills from "../../components/Skills";

const ExperiencePage = () => {
  return (
    <React.Fragment>
      <Heading title={"Experience"} />
      <Experience />
      <Skills />
    </React.Fragment>
  );
};

export default ExperiencePage;
