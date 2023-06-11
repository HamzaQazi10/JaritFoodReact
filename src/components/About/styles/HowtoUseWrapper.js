import styled from "styled-components";

export const HowtoUseWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  .Main {
    position: relative;
    background: linear-gradient(180deg, #eb1d22 12.67%, #520709 81.54%);
    text-align: center;
  }
  .Heading {
    display: flex;
    justify-content: center;
  }
  .Heading-1 {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 44px;
    padding: 2rem 0rem;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
  .Heading-2 {
    margin-left: 1rem;
    font-style: normal;
    font-weight: 100;
    font-size: 40px;
    line-height: 44px;
    padding: 2rem 0rem;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
  .container {
    max-width: 120rem;
    padding: 0 1rem;
    padding-bottom: 4rem;
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 0.9fr);
  }
  .cardItem {
    width: auto;
    border-radius: "1rem";
  }
  .Text-in-Card {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
  }
  .cardItem:hover {
    background-color: #eb1d22;
  }
  .ant-image.ant-image-mask:hover {
    opacity: 0;
  }

  .DownloadIcons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0rem 15rem;
    padding-bottom: 4rem;
  }
  @media (max-width: 1050px) {
    .grid-three-column {
      grid-template-columns: repeat(2, 0.9fr);
      padding-left: 10rem;
      padding-right: 10rem;
    }
  }
  @media (max-width: 768px) {
    .grid-three-column {
      grid-template-columns: repeat(1, 0.9fr);
      padding-left: 10rem;
      padding-right: 10rem;
    }
    .DownloadIcons {
      display: block;
    }
    .Icons {
      padding-top: 1rem;
    }
  }
`;

export const ParallaxHowtoWrapper = styled.div`
  .main {
    position: relative;
    //background-color: transparent;
  }
  .data {
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    //background-color: red;
    width: 100%;
    top: 0;
    padding-top: 5rem;
  }
  .BackgroundImg {
    height: 440px;
  }
  .Review_IMG {
    width: 82px;
    height: 82px;
  }
  .data_Flex {
    display: block;
    //background-color: green;
    text-align: center;
  }
  .data_Val {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 58.2264px;
    line-height: 64px;
    color: #ffffff;
  }
  .data_Info {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 30.8544px;
    line-height: 51px;
    color: #ffffff;
  }
`;
