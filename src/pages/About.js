import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet, vel ne illud mucius forensibus, qui
          aperiam indoctum partiendo ut. Veri officiis nec no. Congue accusata
          ad pri, ea nullam volumus moderatius pri, delicata moderatius nam an.
          Id quo veri omittantur, pro in quodsi posidonium. An iriure meliore
          epicurei pri. Ad vix adhuc singulis, ei pri quaerendum persequeris. Id
          democritum moderatius usu, nulla torquatos suscipiantur qui eu, nec
          dolor omittantur at. Duo mediocrem prodesset moderatius cu. Eu dicam
          repudiandae voluptatibus ius, facer delenit adipisci in vis. Accumsan
          copiosae disputando cu cum. Te case summo sit, etiam melius gloriatur
          eu duo, ex quidam reprimique sit. Diam ipsum probatus nam ex, pri
          principes assueverit ut. Illum dolor no per, dolores singulis ex vis,
          ea eum nibh appareat. Eum case phaedrum eu, populo aliquando
          maiestatis ius et. Natum pertinacia has ex, mei ex probo fugit. Ne sit
          iisque nominati imperdiet, in pri brute omnium offendit. Prima mazim
          delenit mel no, ut quo elit dicta copiosae, ea unum molestiae cum.
        </p>
      </div>
    </div>
  );
}

export default About;
