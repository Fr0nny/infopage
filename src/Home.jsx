import React, { Component } from "react";

import image1 from "./assets/img/Triggered_Gruppe2sw_kl.jpg";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Wir sind eine Rock/Metal Cover-Band aus Mainz</h2>
        <p>Mehr zu uns und folgt auf der fertiggestellten Seite.</p>
        <section>
          <img
              src={image1}
              alt="BandBild"
          />
        </section>
      </div>
    );
  }
}
 
export default Home;