import React, { Component } from 'react';
import './App.css';


const Character = props => {
  const {birth_year, created, edited, eye_color, films, gender, hair_color, height, homeworld, mass, name, skin_color, species, starships, url, vehicle} = props.charProp;
  return (
    <div>
      <h2> {name} </h2>
      <ul>
        <li><h5>Birth Year: </h5> {birth_year} </li>
        <li><h5>Created: </h5> {created} </li>
        <li><h5>Edited: </h5> {edited} </li>
        <li><h5>Eye Color: </h5> {eye_color} </li>
        <li><h5>Films: </h5> {films} </li>
        <li><h5>Gender: </h5> {gender} </li>
        <li><h5>Hair Color: </h5> {hair_color} </li>
        <li><h5>Height: </h5> {height} </li>
        <li><h5>Home World: </h5> {homeworld} </li>
        <li><h5>Mass: </h5> {mass} </li>
        <li><h5>Skin Color: </h5> {skin_color} </li>
        <li><h5>Species: </h5> {species} </li>
        <li><h5>Starships: </h5> {starships} </li>
        <li><h5>Created: </h5> {url} </li>
        <li><h5>Vehicle: </h5> {vehicle} </li>
      </ul>
    </div>
  )
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
      
    };
  }



  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>


        {this.state.starwarsChars.map((i) => <Character charProp={i} />
        )}
      </div>

    );
  }
}

export default App;
