import React from "react";
import { AboutWrapper } from "./styles/AboutWrapper";
import Image1 from "../../image/Screenshot 2023-05-17 211419.png";
import ImageParallax from "../../image/paralax 1.png";
import WhyTikalah from "./WhyTikalah";
import HowtoUse from "./HowtoUse";
function About() {
  //console.log(window.scrollY);
  return (
    <>
      <AboutWrapper>
        <div className="main">
          <img src={Image1} className="Img" />

          <div className="about_Text">
            <div className="heading">
              <div className="heading_About">About</div>
              <div className="heading_Us"> US</div>
            </div>
            <div className="underline">___________</div>
            <div className="text-Section">
              Jarit is a new word in the food and beverages industry. This
              spectacular augmented reality application allows its users to
              preview their potential order in 3D. Designed specifically for the
              food industry, Jarit enables its partner restaurants to make their
              products more attractive to their customers through mouth-watering
              visualizations of the dishes.
            </div>
            <div className="text-Section">
              With the help of photogrammetry, the Jarit team creates realistic
              3D images of dishes in the menu and showcases them through AR. As
              a result, visitors see the look of the dish in advance, they get
              more encouraged to order, and are more likely to come back to give
              this new service another try.
            </div>
            <div className="text-Section">
              The Jarit app is a substantial addition to the menu of any
              restaurant, making the choosing process more fun and compelling
              for customers. Note that it is possible to use Jarit as your main
              AR platform, or create a white-label app for your particular
              brand.
            </div>
            {/*           <div className="text-Section">
            With the help of photogrammetry, the Jarit team creates realistic 3D
            images of dishes in the menu and showcases them through AR. As a
            result, visitors see the look of the dish in advance, they get more
            encouraged to order, and are more likely to come back to give this
            new service another try.
          </div> */}
          </div>
        </div>
        {/*       <div className="parallax">
        <img src={ImageParallax} height="506px" width="100%" className="Img" />
        </div>
      <div>Remove Me</div> */}
      </AboutWrapper>
      <WhyTikalah />
      <HowtoUse />
    </>
  );
}

export default About;
