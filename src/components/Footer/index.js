import React from "react";
import { FooterWrapper } from "./styles/FooterWrapper";
import { Image } from "antd";
import FacebookImg from "../../image/FB (1).png";
import InstaImg from "../../image/FB (2).png";
function Footer() {
  return (
    <FooterWrapper>
      <div className="Main">
        <div className="Social">
          <Image src={FacebookImg} className="FbIMG" />
          <Image src={InstaImg} className="InstaIMG" />
        </div>
        <div className="CopyRight">
          © 2018 ARLOOPA Inc.| All rights reserved.
        </div>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
