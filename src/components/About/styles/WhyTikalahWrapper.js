import styled from "styled-components";

export const WhyTikalahWrapper = styled.div`
  margin-top: 4rem;
  .heading {
    display: block;
    text-align: center;
  }
  .heading1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    color: "#717171";
  }
  .heading2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    color: #232323;
  }
  .underline {
    padding: 0 46%;
  }
  .info_Section {
    display: flex;
    padding: 2rem 15rem;
    //background-color: aliceblue;
    justify-content: space-between;
  }
  .Section1 {
    display: block;
    align-items: center;
    text-align: center;
    //background-color: red;
  }
  .Bottom-Img-Section {
    margin-top: 4rem;
  }
  .heading3 {
    margin-top: 1.3rem;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    align-items: center;
    text-align: center;
    //background-color: green;
  }

  .Info_Text {
    margin-top: 1rem;
    align-items: center;
    text-align: center;
    align-items: center;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 28px;
    color: #676767;
    //max-width: 220px;
    //background-color: green;
  }
  .Centre_Image {
    margin: 0 2rem;
    align-self: center;
  }
  @media (max-width: 1250px) {
    .info_Section {
      padding: 2rem 7rem;
    }
  }
  @media (max-width: 1120px) {
    .info_Section {
      padding: 2rem 5rem;
    }
  }
  @media (max-width: 1060px) {
    .info_Section {
      padding: 2rem 1rem;
    }
  }
  @media (max-width: 1000px) {
    .info_Section {
      display: block;
    }
    .Info_Text {
      //background-color: red;
      margin-left: 37%;
      margin-right: 37%;
      margin-bottom: 3rem;
    }
    .Centre_Image {
      justify-content: center;
      align-items: center;
      //background-color: red;
    }
  }
  @media (max-width: 648px) {
    .Info_Text {
      //background-color: red;
      margin-left: 30%;
      margin-right: 30%;
      margin-bottom: 3rem;
    }
  }
`;
