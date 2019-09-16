import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard'
import axios from 'axios';

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const api = "https://rickandmortyapi.com/api/"
    const [episodes, setEpisodes] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios
    .get(`${api}/episode`)
    .then(response => setEpisodes(response.data.results))
    .catch(err => console.log("Error: ", err))
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [episodes]);

  return (
    <section className="episode-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
      {episodes.map(episode => console.log(episode)) }
    </section>
  );
}