import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import SWLogo from "../../img/SWLogo.png";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link to={"/"}>
          <img src={SWLogo} className="logo" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
              </a>
              <ul className="dropdown-menu">
                {store.favorites.map((favorite, index)=> {
                  return (
                    <li key={index}><a className="dropdown-item" href="#">{favorite}</a></li>
                  )
                  })}
                {store.favorites.length < 1 && <li><a className="dropdown-item" href="#">No favorites</a></li>}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
	);
};