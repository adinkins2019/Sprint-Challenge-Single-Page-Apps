import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function CharacterList({api}) {
  // TODO: Add useState to track data from useEffect
const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
      .get(`${api}/character`)
      .then(response => console.log(response.data.results))
      .catch(err => console.log('Error: ', err))
  }, [characters]);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
      {characters.map(character => console.log(character))}
    </section>
  );
}
