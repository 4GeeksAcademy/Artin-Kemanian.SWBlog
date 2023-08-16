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
		<div className="">
			<div className="row">
				<div className="col-6 text-center">
					<img src={`https://starwars-visualguide.com/assets/img/characters/${params.uid}.jpg`} className="col-6" />
				</div>
				<div className="col-6 text-center">
					<h1 className="col-6">{character.name}</h1>
					<p className="col-3"> </p>
					<div className="col-6">
						<p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget vehicula elit, sit amet fringilla eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum tincidunt libero nec neque mattis, quis ultricies justo fermentum. Ut ac pulvinar arcu. Suspendisse porta sodales mi sit amet iaculis. Aliquam ac augue varius, blandit est quis, pulvinar nisl. Cras massa quam, molestie lobortis mollis sed, rutrum at risus. Sed a rhoncus dolor. Quisque dignissim nisi turpis, eget aliquet purus mattis vitae.</p>				
					</div>
					<p className="col-3"> </p>
				</div>
			</div>
			<hr className="my-4 bg-danger" />
			<div className="row text-center">
				<div className="col text-danger">
					<h5>Gender</h5>
					<p>{character.gender}</p>
				</div>
				<div className="col text-danger">
					<h5>Height</h5>
					<p>{character.height}</p>
				</div>
				<div className="col text-danger">
					<h5>Mass</h5>
					<p>{character.mass}</p>
				</div>
				<div className="col text-danger">
					<h5>Hair color</h5>
					<p>{character.hair_color}</p>
				</div>
				<div className="col text-danger">
					<h5>Skin color</h5>
					<p>{character.skin_color}</p>
				</div>
				<div className="col text-danger">
					<h5>Birth year</h5>
					<p>{character.birth_year}</p>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg mt-5" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};