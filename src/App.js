import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import {Route, NavLink } from 'react-router-dom'
import LocationsList from './components/LocationsList'
import EpisodeList from './components/EpisodeList'
import CharacterList from './components/CharacterList'
import WelcomePage from './components/WelcomePage'
import styled from 'styled-components'

const aNavLink = styled(NavLink)`
  text-decoration: none;
   
`

const Li = styled.li`
  padding: 5%;
  border: 1px solid black;
  `

export default function App() {

  return (
    <main>
      <Header />
      {/* <TabNav /> */}

      <ul>
     <aNavLink to="/"><Li>Home</Li></aNavLink>
     <aNavLink to="/character"><Li>Characters</Li></aNavLink>
     <aNavLink to="/episode"><Li>Episodes</Li></aNavLink>
     <aNavLink to="/location"><Li>Locations</Li></aNavLink>
     </ul>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/character" component={CharacterList} />
      <Route path="/location" component={LocationsList} />
      <Route path="/episode" component={EpisodeList} />
    </main>
  );
}
