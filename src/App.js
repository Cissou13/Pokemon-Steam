import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Team from './components/Team';
import Presentation from './components/Presentation';
import Synopsis from './components/Synopsis';
import FAQ from './components/Faq';

import Homepage from './components/Homepage';
import './normalize.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Navbar />
      <Switch>
        <Route path='/projets' component={Presentation} />
        <Route path='/histoire' component={Synopsis} />
        <Route path='/FAQ' component={FAQ} />
        <Route path='/team' component={Team} />
        <Route exact path='/' component={Homepage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
