import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetail = props => {
	const { store, actions } = useContext(Context);
	const [planet, setPlanet] = useState({})
	const params = useParams();

	function getPlanet(){
		fetch('https://swapi.tech/api/planets/'+params.uid)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.result.properties)
			setCharacter(data.result.properties);
			console.log(planet)
		} )
	}

	useEffect(()=>{
		getPlanet();
		console.log(planet)
	},[])

	return (
        <div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {planet.name}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
    );
};