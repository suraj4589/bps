// About.js
import React from 'react';
import './About.css'
import A1 from '../../assets/About/1.png'
import A2 from '../../assets/About/2.png'
function About() {
  return <>
    <div class="container-about">
  
  <div class="container">
  <div class="row">
    
    <img src={A1} class="img-d" alt="..."></img>
    <img src={A2} class="img-v" alt="..."></img>
    </div>
   
  </div>
</div>

  </>;
}

export default About;
