import React, { Component, createRef } from 'react';
import { Sticky } from 'semantic-ui-react'
import './App.css';

import HeaderNavBar from './Components/HeaderNavBar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Experience from './Components/Experience'

class App extends Component {
  contextRef = createRef()

  render(){
    return(
      <div ref={this.contextRef}>
        <Sticky context={this.contextRef}>
          <HeaderNavBar />
        </Sticky>
        <Home />
        <Skills />
        <Projects />
        <Experience />
      </div>
    )
  }
}

export default App;