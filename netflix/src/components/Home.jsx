import React from 'react';
import { NavLink } from 'react-router-dom';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {

  return(

    <div id="container">
        <div class="ic"><img class="cardpic" class="moto"  src="moto.png" /></div>
        <div class="play">
          <div id="bttn">Afspelen</div>
        </div>
        <div class="play2">
          <div id="bttn2" ><FontAwesomeIcon icon={faInfoCircle} /><p2>Meer Informatie</p2></div>
        </div>
      <div class="bar">
        <p1>Trending</p1><br></br>
         <div class="card">
          <div class="ic"><img class="cardpic" class="pic"  src="grey.jpg" /></div>
         </div>
         <div class="card">
          <div class="ic"><img class="cardpic" class="pic"  src="magic.jpg" /></div>
         </div>
         <div class="card">
          <div class="ic"><img class="cardpic" class="pic"  src="ted.jpg" /></div>
         </div>
         <div class="card">
          <div class="ic"><img class="cardpic" class="pic"  src="tom.jpg" /></div>
         </div>
         <div class="card">
          <div class="ic"><img class="cardpic" class="pic"  src="croods.jpg" /></div>
         </div>
         <div class="card">
          <div class="ic"><img class="cardpic" class="pic"  src="saus.jpg" /></div>
         </div>
         <div class="card">
          <div class="ic"><img class="cardpic" class="pic"  src="shrek.jpg" /></div>
         </div>
      </div>
      <div class="bar2">
        <p1>Mijn Lijst</p1><br></br>
         <div class="card2">
          <div class="ic"><img class="cardpic" class="pic2"  src="cherry.jpg" /></div>
         </div>
         <div class="card2">
          <div class="ic"><img class="cardpic" class="pic2"  src="woman.jpg" /></div>
         </div>
         <div class="card2">
          <div class="ic"><img class="cardpic" class="pic2"  src="raya.jpg" /></div>
         </div>
         <div class="card2">
          <div class="ic"><img class="cardpic" class="pic2"  src="heks.jpg" /></div>
         </div>
         <div class="card2">
          <div class="ic"><img class="cardpic" class="pic2"  src="juman.jpg" /></div>
         </div>
         <div class="card2">
          <div class="ic"><img class="cardpic" class="pic2"  src="joker.jpg" /></div>
         </div>
         <div class="card2">
          <div class="ic"><img class="cardpic" class="pic2"  src="tenet.jpg" /></div>
         </div>
      </div>
    </div>

  )
}

export default Home;
