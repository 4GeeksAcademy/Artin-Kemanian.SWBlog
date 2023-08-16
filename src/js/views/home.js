import React, { useEffect, useState } from "react";

import "../../styles/home.css";
import CharacterCard from "../component/CharacterCard";
import PlanetCard from "../component/PlanetCard";

export const Home = () => {
	const cardStyles = {
	  };
	const [characters, setCharacters] = useState([])
	const [planets, setPlanets] = useState([])
	const [images, setImages] = useState([])

	function getCharacters(){
		fetch('https://swapi.tech/api/people')
		.then((response) => response.json())
		.then((data) => setCharacters(data.results) )
	}
	function getPlanets(){
		fetch('https://swapi.tech/api/planets')
		.then((response) => response.json())
		.then((data) => setPlanets(data.results) )
	}
    function getImages(){
		fetch('https://starwars-visualguide.com/assets/img/characters')
		.then((response) => response.json())
		.then((data) => setImages(data.results) )
	}

	useEffect(()=>{
		getCharacters(),
		getPlanets(),
		getImages()
	},[])


	return (
		<div className="mt-5">
			{/* {images.map((image, index) => (
            	<img src={image} key={index} className="card-img-top" alt="..." />
			))} */}
			<h2 className="text-danger">Characters</h2>
			<div className="d-flex overflow-auto">
				{characters.map((character, index) => (
					<CharacterCard className="card" key={index} uid={character.uid} name={character.name} url={character.url} />
				))}
        	</div>
			<h2 className="text-danger mt-5">Planets</h2>
			<div className="d-flex overflow-auto">
				{planets.map((planet, index) => (
					<PlanetCard className="card" style={cardStyles} key={index} uid={planet.uid} name={planet.name} url={planet.url} />
				))}
        	</div>
		</div>
	)
}