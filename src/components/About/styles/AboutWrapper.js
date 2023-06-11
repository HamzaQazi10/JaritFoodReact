import styled from "styled-components";

export const AboutWrapper = styled.div`
  /* font-family: "Montserrat", sans-serif; */
  background-color: rgb(247, 247, 247);
  .main {
    display: flex;
  }
  .Img {
    width: 2600px;
    height: 549px;
  }
  .about_Img {
    background-color: red;
    width: 50%;
    height: 100%;
  }
  .about_Text {
    padding: 2rem 2.5rem;
  }
  .heading {
    display: flex;
  }
  .heading_About {
    margin-top: 1rem;
    font-size: 40px;
    color: #232323;
    font-weight: 600;
  }
  .heading_Us {
    margin-top: 2.4rem;
    margin-left: 1rem;
    font-size: 25px;
    color: #232323;
    font-weight: 100;
  }
  .text-Section {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    word-spacing: 2px;
    color: #676767;
    margin-top: 1rem;
    line-height: 28px;
    text-indent: 12px;
  }
  .parallax {
    position: relative;
    bottom: 0;
  }
  @media (max-width: 990px) {
    .Img {
      display: none;
    }
    .about_Text {
      padding: 0 15%;
      display: block;
    }
    .heading {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .underline {
      padding: 0 46%;
    }
  }
`;
