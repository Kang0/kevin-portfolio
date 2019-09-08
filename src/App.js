import React, { Component } from 'react';
import './App.css';

import HeaderNavBar from './Components/HeaderNavBar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Experience from './Components/Experience'

class App extends Component {
  render(){
    return(
      <>
        <HeaderNavBar />
        <Home />
        <Skills />
        <Projects />
        <Experience />
      </>
    )
  }
}

export default App;