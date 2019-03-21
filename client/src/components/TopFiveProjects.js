import React from "react";
import { Link } from "react-router-dom";

const TopFiveProjects = props => {
  const { title, description, image, id } = props.details;
  return (
    
      <li className="topFiveProjects">
      <Link className="viewProjectLink" to={"/project/" + id}>
        <h3 className="project-title">{title}</h3>
        <img className="project-image" src={image} alt={title} />
        <p className="project-desc">{description}</p></Link>
      </li>
    
  );
};

export default TopFiveProjects;
