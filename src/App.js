import React from 'react';

import { Footer, Myskills, About, Header } from './containers';
import { Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="kai__bg">
      <Navbar />
      <Header />
    </div>
    <About />
    <Myskills />
    <Footer />
  </div>
);

export default App;
