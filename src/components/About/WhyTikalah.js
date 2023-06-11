import React from "react";
import { WhyTikalahWrapper } from "./styles/WhyTikalahWrapper";
import Image1 from "../../image/WhyTikalahIMG.png";
import Image2 from "../../image/Risk.png";
/* -----------------REMINDER-------------------- */
/* I HAVE TO ADD THE ICONS IN THE IMAGE SECTION */
function WhyTikalah() {
  return (
    <WhyTikalahWrapper>
      <div className="Headings">
        <div className="heading1">Check it</div>
        <div className="heading2">Why Tikalah?</div>
      </div>
      <div className="underline">___________</div>
      <div className="info_Section">
        <div className="Section1">
          <div>
            <img src={Image2} height="40px" width="40px" />
          </div>
          <div className="heading3">Risk Reduction</div>
          <div className="Info_Text">
            When the consumer knows the visual appearance of the dish in
            advance, there’s much less chance that they won’t be satisfied with
            it or will return the order.
          </div>
          <div className="Bottom-Img-Section">
            <img src={Image2} height="40px" width="40px" />
          </div>
          <div className="heading3">Interactive Customer Experience</div>
          <div className="Info_Text">
            Though fancy images Jarit promotes customer engagement, leading
            people to view more options, thus creating more opportunities for
            upselling and cross-selling.
          </div>
        </div>
        <div className="Centre_Image">
          <img src={Image1} height="335px" width="476px" className="Img" />
        </div>
        <div className="Section1">
          <div>
            <img src={Image2} height="40px" width="40px" />
          </div>
          <div className="heading3">Pioneering the sphere</div>
          <div className="Info_Text">
            It’s a proven fact that customers visit restaurants not only for the
            tasty menu, but also because they want to spend time in an
            entertaining atmosphere, see and discover something new, something
            they can tell their friends about.
          </div>
          <div className="Bottom-Img-Section">
            <img src={Image2} height="40px" width="40px" />
          </div>
          <div className="heading3">Risk Reduction</div>
          <div className="Info_Text">
            Become the restaurant that everyone talks about; engrave your name
            among the top restaurants that stand out from the crowd and create
            new standards of service.
          </div>
        </div>
      </div>
    </WhyTikalahWrapper>
  );
}

export default WhyTikalah;
