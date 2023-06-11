import styled from "styled-components";

export const ServicesWrapper = styled.div`
  .heading1 {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 25.8846px;
    line-height: 46px;
    text-align: center;
    color: #6d6d6d;
  }
  .heading2 {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 57.5214px;
    line-height: 63px;
    text-align: center;
  }
  .heading3 {
    text-align: center;
    color: #6d6d6d;
  }
  .container {
    margin-top: 4rem;
    max-width: 120rem;
    padding: 0 10rem;
    padding-bottom: 4rem;
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 0.9fr);

    //text-align: center;
  }
  .Section {
    display: block;
  }
  .SectionFlex {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .Num {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    color: #eb1d22;
  }
  .Head {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    color: #232323;
  }
  .Text {
    text-align: center;
    margin-top: 1rem;
  }

  .ant-image .ant-image-mask:hover {
    opacity: 0;
  }
  .ant-input:focus {
    border: white;
  }
  .ant-card-bordered {
    border: none;
  }
  .ant-card-bordered:focus {
    border: none;
  }
  @media (max-width: 768px) {
    .grid-three-column {
      grid-template-columns: repeat(2, 0.9fr);
      padding-left: 8rem;
      padding-right: 8rem;
    }
  }
  @media (max-width: 498px) {
    .grid-three-column {
      grid-template-columns: repeat(1, 0.9fr);
      padding-left: 10rem;
      padding-right: 10rem;
    }
  }
`;
