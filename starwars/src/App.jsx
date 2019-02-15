import React, { Component } from 'react';

import './App.css';


const Character = props => {
  const {birth_year, created, edited, eye_color, films, gender, hair_color, height, homeworld, mass, name, skin_color, species, starships, url, vehicle} = props.charProp;
  return (
    <div className="listContent">
      <h2> {name} </h2>
      <ul>
        <li><h4>Birth Year: </h4> {birth_year} </li>
        <li><h4>Created: </h4> {created} </li>
        <li><h4>Edited: </h4> {edited} </li>
        <li><h4>Eye Color: </h4> {eye_color} </li>
        <li><h4>Gender: </h4> {gender} </li>
        <li><h4>Hair Color: </h4> {hair_color} </li>
        <li><h4>Height: </h4> {height} </li>
        <li><h4>Home World: </h4> {homeworld} </li>
        <li><h4>Mass: </h4> {mass} </li>
        <li><h4>Skin Color: </h4> {skin_color} </li>

        
        
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
    this.getCharacters('https://swapi.co/api/people/');
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
        {this.state.starwarsChars.map((i) => <Character charProp={i} key={i.name} />
        )}
      </div>

    );
  }
}

export default App;
