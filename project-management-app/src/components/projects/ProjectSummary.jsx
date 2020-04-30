import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-1 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <br />
        <p>Posted by Jak Ashuraliev</p>
        <p className="grey-text">April 20, 2020, 11:15pm</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
