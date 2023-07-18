import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetail = props => {
	const { store, actions } = useContext(Context);
	const [character, setCharacter] = useState({})
	const params = useParams();

	function getCharacter(){
		fetch('https://swapi.tech/api/people/'+params.uid)
		.then((response) => response.json())
		.then((data) => {
			console.log(data.result.properties)
			setCharacter(data.result.properties);
			console.log(character)
		} )
	}

	useEffect(()=>{
		getCharacter();
		console.log(character)
	},[])

	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {character.name}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};