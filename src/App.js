import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import {Route } from 'react-router-dom'
import LocationsList from './components/LocationsList'
import EpisodeList from './components/EpisodeList'
import CharacterList from './components/CharacterList'
import WelcomePage from './components/WelcomePage'

export default function App() {
  
  return (
    <main>
      <Header />
      {/* <TabNav /> */}
      <CharacterList />
      <EpisodeList />
     
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character" component={CharacterList} />
      <Route path="/location" component={LocationsList} />
      <Route path="/episode" component={EpisodeList} />
    </main>
  );
}
