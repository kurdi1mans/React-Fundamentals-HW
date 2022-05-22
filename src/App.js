import { useState,useEffect } from 'react';
import './App.css';
import dataLoader from './dataLoader';
import Card from './components/Card';

function App() {

	const [pokemonList, setPokemonList] = useState([]);
	const [pokemonDetails, setPokemonDetails] = useState([]);

	const loadData = async () =>
	{
		let [pokelist,pokedetails] = await dataLoader.fetchData();
		setPokemonList(pokelist);
		setPokemonDetails(pokedetails);
		console.log(pokedetails)
	}

	useEffect(() =>
	{
		loadData();		
	},[]);


	const generateJSX = () =>
	{
		const navbarJSX = <nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">Pokémon</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
					</ul>
					<form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>;


		const paginationJSX = <nav aria-label="Page navigation example">
			<ul className="pagination justify-content-center mt-1">
				<li className="page-item"><a className="page-link" href="#">Previous</a></li>
				<li className="page-item"><a className="page-link" href="#">1</a></li>
				<li className="page-item"><a className="page-link" href="#">2</a></li>
				<li className="page-item"><a className="page-link" href="#">3</a></li>
				<li className="page-item"><a className="page-link" href="#">Next</a></li>
			</ul>
		</nav>;


		let itemsJSX = [];
		// if(pokemonList.length>0)
		for (let i = 0; i < pokemonList.length; i++)
		{
			itemsJSX.push(<Card name={pokemonList[i].name} img={pokemonDetails[i].sprites.front_default} base_experience={pokemonDetails[i].base_experience} height={pokemonDetails[i].height} weight={pokemonDetails[i].weight}/>);
		}

		const contentJSX = <div className="container" >
			<div className="row" id="CardsContainer">
				{itemsJSX}
			</div>
		</div>;

		return [navbarJSX,contentJSX,paginationJSX]
	}


	


  return (
    <div className="App">
       {generateJSX()}
    </div>
  );
}

export default App;
