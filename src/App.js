import React, {  Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Validation from './components/Validation';

class App extends Component {

  constructor(pops,context) {
    super(pops,context);
    
  }

 
  
  render() {


    return (
      <Router>
      <div className="container">
       
         <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about"  component={About} />
          <Route path="/contact"  component={Contact} />
          <Route path="/validation"  component={Validation} />
        </Switch>
       
      </div>
      </Router>
    )

  }
}



export default App;
