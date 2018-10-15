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

import Particles from "react-particles-js";


const particlesOpt = {

    particles: {
      number: {
        value: 10,
        denisty: {
          enable: true,
          value_area: 800
        }
      },
      color:{
        value: "#BFA300"
      },
      shape: {
        type: "polygon",
        stroke: {
          width: 0,
          color: "#000"
        }
      },
      polygon: {
        nb_sides: 6
      },
      image: {
        src: "./assets/img/Bandlogo_v2.png",
        width: 100,
        height: 100
      },
      opacity:{
        value: 0.3,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size:{
        value: 102,
        random: false,
        anim: {
          enable: true,
          speed: 10,
          size_min: 40,
          sync: false
        }
      },
      line_linked:{
        enable: false,
        distance: 200,
        color: "#ffffff",
        opacity: 1,
        width: 2
      },
      move:{
        enable: true,
        speed: 8,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }

      


      
    }
}

 
class App extends Component {
  render() {
    return (
        <HashRouter>
        <div>

          <h1 className="animated bounceInDown delay-2s">Willkommen bei Triggered!</h1>
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

          <Particles
              params={particlesOpt}
                          />
                          


        </div>
        </HashRouter>


    );
  }
}
 
export default App;