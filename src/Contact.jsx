import React, { Component } from "react";

import image2 from "./assets/img/Bandlogo_v2.png";
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Ihr habt Fragen?</h2>
        <p>
          Schreibt uns einfach eine Mail an <a href='mailto:info@triggered-band.de'>info@triggered-band.de</a>!
        </p>
        <p>
          Oder kontaktiert uns über <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/triggered.mainz'>Facebook</a>!
        </p>
        <img
              className="logo"
              src={image2}
              alt="BandLogo"
          />
      </div>
    );
  }
}
 
export default Contact;