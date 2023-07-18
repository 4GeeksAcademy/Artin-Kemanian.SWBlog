import React, { Component, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import LukeSkywalker from "../../img/LS.jpg";

const CharacterCard = (props) => {
    const {store, actions} = useContext(Context)
    
    return (
    <div className="card mt-2 mx-1" >
        <img src={LukeSkywalker} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to={"/CharacterDetail/"+props.uid} className="btn btn-primary">Learn more</Link>
            <button className="btn btn-warning" onClick={()=> actions.addFavorites(props.name)}><i className="far fa-heart"></i></button>
        </div>
    </div>
)};

export default CharacterCard