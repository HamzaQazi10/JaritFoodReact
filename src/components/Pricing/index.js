import React from "react";
import { PricingWrapper, ReviewsWrapper } from "./styles/PricingWrapper";
import { Image, Card } from "antd";
import { DownloadButton } from "../styles/DownloadButton";
import { ContactButton } from "../styles/ContactButton";
import { Col, Row } from "antd";
import TickImg from "../../image/tick.png";
import TickImgWhite from "../../image/tickwhite.png";
import ReviewImg from "../../image/section#review.png";
import Reviews from "../Review/Reviews";
function Pricing() {
  return (
    <>
      <PricingWrapper>
        <div className="Heading1">New Plans</div>
        <div className="Heading2">
          <div className="Heading2-part1">Our</div>
          <div className="Heading2-part2">Pricing</div>
          <div className="Heading2-part1">Table</div>
        </div>
        <div className="container">
          <Row gutter={[16, 24]}>
            <Col className="gutter-row" span={6}>
              <Card hoverable className="cardItem">
                <div className="Heading_Price">Basic</div>
                <div className="Prices">
                  <div className="Dollar">$</div>
                  <div className="ValueTime">
                    <div className="Value">19</div>
                    <div className="Time">Month (Minimum 3 months)</div>
                  </div>
                </div>
                {/*          <div className="Text-in-Card">Download Tikalah App</div> */}
                <div className="TickSection">
                  <div>
                    <img src={TickImg} />
                  </div>
                  <div className="TickText">3D scanning of 1 item</div>
                </div>
                <div className="TickSection">
                  <div>
                    <img src={TickImg} />
                  </div>
                  <div className="TickText">Cloud Hosting</div>
                </div>
                <DownloadButton>
                  <text className="ButtonText">Contact Us</text>
                </DownloadButton>
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card hoverable className="cardItemAdvanced">
                <div className="Heading_PriceAdvanced">Advanced</div>
                <div className="PricesAdvanced">
                  <div className="DollarAdvanced">$</div>
                  <div className="ValueTimeAdvanced">
                    <div className="ValueAdvanced">99</div>
                    <div className="TimeAdvanced">Month (Minimum 3 months)</div>
                  </div>
                </div>
                {/*          <div className="Text-in-Card">Download Tikalah App</div> */}
                <div className="TickSectionAdvanced">
                  <div>
                    <img src={TickImgWhite} />
                  </div>
                  <div className="TickTextAdvanced">3D scanning of 1 item</div>
                </div>
                <div className="TickSectionAdvanced">
                  <div>
                    <img src={TickImgWhite} />
                  </div>
                  <div className="TickTextAdvanced">Cloud Hosting</div>
                </div>
                <div className="TickSectionAdvanced">
                  <div>
                    <img src={TickImgWhite} />
                  </div>
                  <div className="TickTextAdvanced">Analytics</div>
                </div>
                <ContactButton>
                  <text className="ButtonTextAdvanced">Contact Us</text>
                </ContactButton>
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card hoverable className="cardItem">
                <div className="Heading_Price">Pro</div>
                <div className="Prices">
                  <div className="Dollar">$</div>
                  <div className="ValueTime">
                    <div className="Value">299</div>
                    <div className="Time">Month (Minimum 3 months)</div>
                  </div>
                </div>
                {/*          <div className="Text-in-Card">Download Tikalah App</div> */}
                <div className="TickSection">
                  <div>
                    <img src={TickImg} />
                  </div>
                  <div className="TickText">3D scanning of 1 item</div>
                </div>
                <div className="TickSection">
                  <div>
                    <img src={TickImg} />
                  </div>
                  <div className="TickText">Cloud Hosting</div>
                </div>
                <div className="TickSection">
                  <div>
                    <img src={TickImg} />
                  </div>
                  <div className="TickText">Custom Marker</div>
                </div>
                <div className="TickSection">
                  <div>
                    <img src={TickImg} />
                  </div>
                  <div className="TickText">Analytics</div>
                </div>
                <div className="TickSection">
                  <div>
                    <img src={TickImg} />
                  </div>
                  <div className="TickText">Dedicated Support Coach</div>
                </div>
                <DownloadButton>
                  <text className="ButtonText">Contact Us</text>
                </DownloadButton>
              </Card>
            </Col>
            <Col className="gutter-row" span={6}>
              <Card hoverable className="cardItem">
                <div className="Heading_Price">Enterprice</div>
                <div className="Prices">
                  <div className="EnterpriseText">
                    White-label app creation. Drop us a line to get a
                    competitive quote.
                  </div>
                </div>
                {/*          <div className="Text-in-Card">Download Tikalah App</div> */}
                <div className="TickSection">
                  <div>
                    <img src={TickImg} />
                  </div>
                  <div className="TickText">10 3D scanned dishes included</div>
                </div>
                <div className="TickSection">
                  <div>
                    <img src={TickImg} />
                  </div>
                  <div className="TickText">Custom branded app creation</div>
                </div>
                <div className="TickSection">
                  <div>
                    <img src={TickImg} />
                  </div>
                  <div className="TickText">Customized design</div>
                </div>

                <div className="TickSection">
                  <div>
                    <img src={TickImg} />
                  </div>
                  <div className="TickText">Dedicated Support Coach</div>
                </div>
                <DownloadButton>
                  <text className="ButtonText">Contact Us</text>
                </DownloadButton>
              </Card>
            </Col>
          </Row>
        </div>
      </PricingWrapper>
      <Reviews />

      {/*       <ReviewsWrapper>
        <div className="main">
          <div>
            <img src={ReviewImg} alt="Not Loading" />
          </div>
        </div>
      </ReviewsWrapper> */}
    </>
  );
}

export default Pricing;
