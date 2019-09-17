import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import {Route, NavLink } from 'react-router-dom'
import LocationsList from './components/LocationsList'
import EpisodeList from './components/EpisodeList'
import CharacterList from './components/CharacterList'
import WelcomePage from './components/WelcomePage'
import styled from 'styled-components'

const Li = styled.li`
  padding: 10%;
  border: 1px solid black;
  list-style: none;
  margin: 0 10px;
  width: 100%;

  `
const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  `
export default function App() {

  return (
    <main>
      <Header />
      {/* <TabNav /> */}

      <Ul>
     <NavLink to="/"><Li>Home</Li></NavLink>
     <NavLink to="/character"><Li>Characters</Li></NavLink>
     <NavLink to="/episode"><Li>Episodes</Li></NavLink>
     <NavLink to="/location"><Li>Locations</Li></NavLink>
     </Ul>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character" component={CharacterList} />
      <Route path="/location" component={LocationsList} />
      <Route path="/episode" component={EpisodeList} />
    </main>
  );
}
