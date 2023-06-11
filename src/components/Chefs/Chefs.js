import React from "react";
import { ChefsWrapper } from "./styles/ChefsWrapper";
import Chef1 from "../../image/pix1.png";
import Chef2 from "../../image/pix2.png";
import Chef3 from "../../image/pix3.png";
import Chef4 from "../../image/pix4.png";
import Cam from "../../image/Vector (8).png";
import { Card, Image } from "antd";

function Chefs() {
  return (
    <ChefsWrapper>
      <div className="heading1">Let's Meet</div>
      <div className="heading2">Our Chefs</div>
      <div className="heading3">____________________</div>

      <div className="container">
        <div className="grid grid-three-column">
          <Card
            bordered={false}
            hoverable
            className="cardItem"
            cover={
              <Image
                style={{
                  borderRadius: "50%",
                  padding: "2rem",
                  background:
                    "linear-gradient(180deg, #eb1d22 12.67%, #520709 81.54%)",
                  paddingLeft: "1rem",
                }}
                src={Chef1}
              />
            }
          >
            <div className="NameCook">Andrew</div>
            <div className="DesignationCook">Head Cook</div>
            <div className="Cam">
              <Image src={Cam} />
            </div>
          </Card>
          <Card
            hoverable
            className="cardItem"
            cover={
              <Image
                style={{
                  borderRadius: "50%",
                  padding: "2rem",
                  background:
                    "linear-gradient(180deg, #eb1d22 12.67%, #520709 81.54%)",
                  paddingLeft: "1rem",
                }}
                src={Chef2}
              />
            }
          >
            {" "}
            <div className="NameCook">Andrew</div>
            <div className="DesignationCook">Head Cook</div>
            <div className="Cam">
              <Image src={Cam} />
            </div>
          </Card>
          <Card
            hoverable
            className="cardItem"
            cover={
              <Image
                style={{
                  borderRadius: "50%",
                  padding: "2rem",
                  background:
                    "linear-gradient(180deg, #eb1d22 12.67%, #520709 81.54%)",
                  paddingLeft: "1rem",
                }}
                src={Chef3}
              />
            }
          >
            {" "}
            <div className="NameCook">Andrew</div>
            <div className="DesignationCook">Head Cook</div>
            <div className="Cam">
              <Image src={Cam} />
            </div>
          </Card>
          <Card
            hoverable
            className="cardItem"
            cover={
              <Image
                style={{
                  borderRadius: "50%",
                  padding: "2rem",
                  background:
                    "linear-gradient(180deg, #eb1d22 12.67%, #520709 81.54%)",
                  paddingLeft: "3rem",
                }}
                src={Chef4}
              />
            }
          >
            {" "}
            <div className="NameCook">Andrew</div>
            <div className="DesignationCook">Head Cook</div>
            <div className="Cam">
              <Image src={Cam} />
            </div>
          </Card>
        </div>
      </div>
    </ChefsWrapper>
  );
}

export default Chefs;
