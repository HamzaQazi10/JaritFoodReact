import React from "react";
import { ServicesWrapper } from "./styles/ServicesWrapper";
import Chef1 from "../../image/pix1.png";
import Chef2 from "../../image/pix2.png";
import Chef3 from "../../image/pix3.png";
import Chef4 from "../../image/pix4.png";
import Cam from "../../image/Vector (8).png";
import { Card, Image } from "antd";

function Services() {
  return (
    <ServicesWrapper>
      <div className="heading1">What we do</div>
      <div className="heading2">Our Awesome Services</div>
      <div className="heading3">____________________</div>

      <div className="container">
        <div className="grid grid-three-column">
          <div className="Section">
            <div className="SectionFlex">
              <div className="Num">01. </div>
              <div className="Head">Photogrammetry – 3D Scanning</div>
            </div>
            <div className="Text">
              We visit your location, capture your dishes and turn them into 3D
              models.
            </div>
          </div>
          <div className="Section">
            <div className="SectionFlex">
              <div className="Num">02. </div>
              <div className="Head">Cloud Hosting</div>
            </div>
            <div className="Text">We host your 3D dishes on our platform.</div>
          </div>
          <div className="Section">
            <div className="SectionFlex">
              <div className="Num">03. </div>
              <div className="Head">White Labeling</div>
            </div>
            <div className="Text">
              We create a branded app for you with your own design.
            </div>
          </div>
        </div>
      </div>
    </ServicesWrapper>
  );
}

export default Services;
