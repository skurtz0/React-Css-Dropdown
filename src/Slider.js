import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import a from "./a.png";
import b from "./b.png";

export default () => (
  <Carousel autoPlay>
    <div>
      <img
        alt=""
        src="https://wallpaper-house.com/data/out/6/wallpaper2you_84045.jpg"
      />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img
        alt=""
        src="https://wallpaper-house.com/data/out/6/wallpaper2you_84045.jpg"
      />
      <p className="legend">
        <a href="https://twitter.com/">Legend 2</a>
      </p>
    </div>
    <div>
      <img
        alt=""
        src="https://wallpaper-house.com/data/out/6/wallpaper2you_84045.jpg"
      />
    </div>
    <div>
      <img alt="" src={a} />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img alt="" src={b} />
      <p className="legend">Legend 5</p>
    </div>
  </Carousel>
);
