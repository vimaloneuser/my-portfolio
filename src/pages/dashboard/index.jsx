import React from "react";
import Contact from "../../components/Contact";
import Education from "../../components/Education";
import Experience from "../../components/Experience";
import Introduction from "../../components/Introduction";
import Skills from "../../components/Skills";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Introduction />
      <Skills />
      <Experience heading />
      <Education />
      <Contact heading />
    </React.Fragment>
  );
};

export default Dashboard;
