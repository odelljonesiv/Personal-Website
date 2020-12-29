import Home from './components/sections/home/Home';
import Experience from './components/sections/experience/Experience';
import Projects from './components/sections/projects/Projects';
import NavBar from './components/head/nav/NavBar';
import React from 'react';

import { createGlobalStyle } from 'styled-components';

//Global clean up.
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

//React App.
function App() {
  return (
  <React.Fragment>
    <GlobalStyle />
    <NavBar /> 
    <Home />
    <Experience />
    <Projects />
  </React.Fragment>

  );
}

export default App;
