import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const api = "https://rickandmortyapi.com/api/"
const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
      .get(`${api}/character`)
      .then(response => setCharacters(response.data.results))
      .catch(err => console.log('Error: ', err))
  }, [characters]);

  return (
    <section className="character-list grid-view">
      
      {characters.map(character => 
        <CharacterCard created={character.created}
                       episode={character.episode}
                       gender={character.gender}
                       name={character.name}
                       species={character.species}
                       type={character.type}
                       origin={character.origin}
                       status={character.status}
                       location={character.location}
                       url={character.url} />
      )}
    </section>
  );
}
