import React from "react";

export default class Slider extends React.Component {
  render(){
    return (
      <div class="slider marginTop" id="mySlider">
        <div class="slide-group">
          <div class="slide">
            <img src="../../img/slider1.jpg" class="sliderImg" />
          </div>
          <div class="slide">
            <img src="../../img/slider2.jpg" class="sliderImg"  />
          </div>
          <div class="slide">
            <img src="../../img/slider3.jpg" class="sliderImg"  />
          </div>
          <div class="slide">
            <img src="../../img/slider4.jpg" class="sliderImg"  />
          </div>
        </div>
      </div>
    );
  }
}
