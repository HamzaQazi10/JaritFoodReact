import React from "react";
import {
  HowtoUseWrapper,
  ParallaxHowtoWrapper,
} from "./styles/HowtoUseWrapper";
import { Card, Image } from "antd";
import Image1 from "../../image/step1.png";
import Image2 from "../../image/step2.png";
import Image3 from "../../image/step3.png";
import GoogleImg from "../../image/google-play.png.png";
import DownloadImg from "../../image/a.button.png";
import AppleImg from "../../image/app-store.png.png";
import ParallaxImg from "../../image/paralax 1.png";
import DownloadIconImg from "../../image/downloads_icon.png.png";
import BurgerImg from "../../image/models_icon.png.png";
import RestaurantImg from "../../image/restaurants_icon.png.png";
import SmilyImg from "../../image/costumers_icon.png.png";

/* -------TO BE DONE-------- */
/* THE COMPONENT IS NOT RESPONSIVE I HAVE TO MAKE IT RESPONSIVE */
function HowtoUse() {
  return (
    <>
      <HowtoUseWrapper>
        <div className="Main">
          <div className="Heading">
            <div className="Heading-1">How</div>

            <div className="Heading-2"> to Use</div>
          </div>
          <div className="container">
            <div className="grid grid-three-column">
              <Card
                hoverable
                className="cardItem"
                cover={
                  <Image
                    style={{
                      borderRadius: "1.2rem",
                      maxHeight: "200px",
                      minHeight: "200px",
                    }}
                    src={Image1}
                  />
                }
              >
                <div className="Text-in-Card">Download Tikalah App</div>
              </Card>
              <Card
                hoverable
                className="cardItem"
                cover={
                  <Image
                    style={{
                      borderRadius: "1.2rem",
                      maxHeight: "200px",
                      minHeight: "200px",
                    }}
                    src={Image2}
                  />
                }
              >
                <div className="Text-in-Card">
                  Point your phone on special marker
                </div>
              </Card>{" "}
              <Card
                hoverable
                className="cardItem"
                cover={
                  <Image
                    style={{
                      borderRadius: "1.2rem",
                      maxHeight: "200px",
                      minHeight: "200px",
                    }}
                    src={Image3}
                  />
                }
              >
                <div className="Text-in-Card">
                  Discover how the dish looks in 3D
                </div>
              </Card>
            </div>
          </div>
          <div className="DownloadIcons">
            <div className="Icons">
              <Image src={GoogleImg} />
            </div>
            <div>
              {" "}
              <div className="Icons">
                <Image src={DownloadImg} />
              </div>
            </div>
            <div>
              {" "}
              <div className="Icons">
                <Image src={AppleImg} />
              </div>
            </div>
          </div>
        </div>
      </HowtoUseWrapper>
      <ParallaxHowtoWrapper>
        <div className="main">
          <Image src={ParallaxImg} className="BackgroundImg" />
          <div className="data">
            <div className="data_Flex">
              <Image src={DownloadIconImg} className="Review_IMG" />
              <div className="data_Val">500+</div>
              <div className="data_Info">3D Models Created</div>
            </div>
            <div className="data_Flex">
              <Image src={BurgerImg} className="Review_IMG" />
              <div className="data_Val">300+</div>
              <div className="data_Info">RESTAURANTS USING TIKALAH</div>
            </div>
            <div className="data_Flex">
              <Image src={RestaurantImg} className="Review_IMG" />
              <div className="data_Val">150+</div>
              <div className="data_Info">Downloads</div>
            </div>
            <div className="data_Flex">
              <Image src={SmilyImg} className="Review_IMG" />
              <div className="data_Val">480+</div>
              <div className="data_Info">HAPPY AND FULL CUSTOMERS</div>
            </div>
          </div>
        </div>
      </ParallaxHowtoWrapper>
    </>
  );
}

export default HowtoUse;
