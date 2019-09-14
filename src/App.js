import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import LocationsList from './components/LocationsList'
import EpisodeList from './components/EpisodeList'
import CharacterList from './components/CharacterList'

export default function App() {
  const api = "https://rickandmortyapi.com/api/"
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <CharacterList api={api} />
      <EpisodeList api={api} />
      <LocationsList api={api} />
    </main>
  );
}
