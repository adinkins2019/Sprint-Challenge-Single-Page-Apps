import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import {Route, NavLink } from 'react-router-dom'
import LocationsList from './components/LocationsList'
import EpisodeList from './components/EpisodeList'
import CharacterList from './components/CharacterList'
import WelcomePage from './components/WelcomePage'

export default function App() {

  return (
    <main>
      <Header />
      {/* <TabNav /> */}

      
     <NavLink to="/">Home</NavLink>
     <NavLink to="/character">Characters</NavLink>
     <NavLink to="/episode">Episodes</NavLink>
     <NavLink to="/location">Locations</NavLink>

      <Route exact path="/" component={WelcomePage} />
      <Route path="/character" component={CharacterList} />
      <Route path="/location" component={LocationsList} />
      <Route path="/episode" component={EpisodeList} />
    </main>
  );
}
