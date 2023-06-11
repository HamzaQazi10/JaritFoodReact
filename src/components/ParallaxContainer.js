import React, { useEffect } from "react";
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import backgroundImage from "../image/header-image1.png";

import Image1 from "../image/header-image1.png";
import Image5 from "../image/header-image2.png";
import Image4 from "../image/header-image4.png";
import Image3 from "../image/header-image6.png";
import rocketImage from "../image/header-image9.png";

const layers = [
  {
    name: "text",
    image: Image1,
    dataDepth: "0.1",
  },
  {
    name: "astronaut",
    image: Image5,
    dataDepth: "2",
  },
  {
    name: "planet1",
    image: Image4,
    dataDepth: "1",
  },
  {
    name: "planet2",
    image: Image3,
    dataDepth: "-1",
  },
  /*   {
    name: "rocket",
    image: Image5,
    dataDepth: "0.5",
  }, */
];

const Container = Styled.div`
	width: 100%;
	height: 100vh;

	//background: url(${(props) => props.backgroundImage});
    background-color:white ;

`;

const ParallaxImagesContainer = ({ backgroundImage, layers }) => {
  useEffect(() => {
    const scene1 = document.getElementById("scene1");
    new Parallax(scene1);
    const scene2 = document.getElementById("scene2");
    new Parallax(scene2);
    const scene3 = document.getElementById("scene3");
    new Parallax(scene3);
    const scene4 = document.getElementById("scene4");
    new Parallax(scene4);
    const scene5 = document.getElementById("scene5");
    new Parallax(scene5);

    /*const scene4 = document.getElementById("scene4");
    new Parallax(scene4);
    const scene5 = document.getElementById("scene5");
    new Parallax(scene5); */
  });

  return (
    <>
      <div
        id="scene1"
        style={{
          position: "absolute",
          top: "-100px",
          left: "-150px",
          zIndex:
            "1" /* IF THERE IS ANY PROBLEM WITH THE DISPLAYING OR OVERLAPING, THAN WE NEED TO ADJUST ZINDEX VALUE */,
        }}
      >
        <img src={Image1} data-depth="0.9" height="440px" />
      </div>
      <div
        id="scene2"
        style={{ position: "absolute", bottom: "-70px", left: "-220px" }}
      >
        {/*       {layers.map((l, index) => (
          <img key={index} data-depth={l.dataDepth} src={l.image} alt={l.name} />
        ))} */}

        <img src={rocketImage} data-depth="0.5" height="440px" />
      </div>
      <div
        id="scene3"
        style={{ position: "absolute", top: "-80px", right: "-20px" }}
      >
        <img src={Image3} data-depth="0.9" height="240px" />
      </div>
      <div
        id="scene4"
        style={{ position: "absolute", bottom: "10px", right: "10px" }}
      >
        <img src={Image4} data-depth="0.9" height="340px" />
      </div>
      <div
        id="scene5"
        style={{ position: "absolute", top: "50px", right: "120px" }}
      >
        <img src={Image5} data-depth="0.9" height="300px" />
      </div>
    </>
  );
};

ParallaxImagesContainer.propTypes = {
  backgroundImage: PropTypes.string,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      dataDepth: PropTypes.string,
    })
  ),
};

ParallaxImagesContainer.defaultProps = {
  backgroundImage: backgroundImage,
  layers: layers,
};

export default ParallaxImagesContainer;
