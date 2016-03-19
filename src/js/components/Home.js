import React from "react";

import Slider from './Slider';
import HomeService from './HomeService';
import Aeop from './Aeop';

export default class Home extends React.Component {
  render(){
    return (
      <div class="content marginBottom">
        <header class="bar bar-nav">
          <h1 class="title">锋悦传媒</h1>
        </header>

        <Slider />

        <HomeService />

        <Aeop />

      </div>
    );
  }
}
