import React from 'react';




const Character = props => {
    const {birth_year, created, edited, eye_color, gender, hair_color, height, mass, name, skin_color} = props.charProp;
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
          <li><h4>Mass: </h4> {mass} </li>
          <li><h4>Skin Color: </h4> {skin_color} </li>
        </ul>
      </div>
    )
  }

  export default Character;