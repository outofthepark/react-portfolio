import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NoMatch from './Pages/NoMatch'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="">
          <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/resume" component={Resume} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
