import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Info from "./Info";
import Contact from "./Contact";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";


 
class App extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1 className="animated bounceInDown delay-2s">Willkommen bei TRIGGERED!</h1>
          <p>work in progress</p>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/info">Infos</NavLink></li>
            <li><NavLink to="/contact">Kontakt</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/info" component={Info}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/impressum" component={Impressum}/>
            <Route path="/datenschutz" component={Datenschutz}/>
          </div>
          <div>
            <ul className="footer">
            <li><NavLink to="/Impressum">Impressum</NavLink></li>
            <li><NavLink to="/Datenschutz">Datenschutz</NavLink></li>
          </ul>
          </div>

        </div>
        </HashRouter>


    );
  }
}
 
export default App;


