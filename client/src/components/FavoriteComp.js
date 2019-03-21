import React from "react";
import { Link } from "react-router-dom";
import deleteLogo from "../trashCanSmall.png";
import API from "../utils/API";

const Favorite = props => {
  const { title, description, image, id } = props.details;
  let deleteThisFavorite = id => {
    API.deleteFavorite(id)
      .then(res => props.loadFavorites())
      .catch(err => console.log(err));
  };

  return (
    <li className="favorites-container">
      <Link className="viewProjectLink" to={"/project/" + id}>
        <button
          id="favorites-btn"
          onClick={e => {
            e.preventDefault();
            deleteThisFavorite(id);
          }}
        >
          <img src={deleteLogo} alt="favorite button" id="deleteLogo" />
        </button>

        <h3 className="project-title">{title}</h3>
        <img className="project-image" src={image} alt={title} />
        <p className="project-desc">{description}</p>
      </Link>
    </li>
  );
};

export default Favorite;
