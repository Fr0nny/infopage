import React, { Component } from "react";
import { Image } from 'react-bootstrap';

import image1 from "./assets/img/Triggered_Gruppe2sw_kl.jpg";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Wir sind eine Rock/Metal Cover-Band aus Mainz</h2>
        <p>Mehr zu uns und folgt auf der fertiggestellten Seite.</p>
        <section>
          <Image
              src={image1}
              alt="BandBild"
              rounded
          />
        </section>
      </div>
    );
  }
}
 
export default Home;