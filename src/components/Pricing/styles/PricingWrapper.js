import styled from "styled-components";

export const PricingWrapper = styled.div`
  .Heading1 {
    margin-top: 3rem;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 32px;
    color: #6d6d6d;
    text-align: center;
  }
  .Heading2 {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .Heading2-part1 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 100;
    font-size: 40px;
    line-height: 44px;
    color: #232323;
  }
  .Heading2-part2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 200;
    font-size: 40px;
    line-height: 44px;
    color: #232323;
    padding: 0rem 1rem;
  }
  .container {
    max-width: 120rem;
    padding: 0 1rem;
    padding-bottom: 4rem;
    padding-top: 3rem;
    //background-color: red;
  }
  .grid-three-column {
    grid-template-columns: repeat(4, 0.9fr);
  }
  .cardItem {
    width: auto;
    /* max-height: 100px; */
    /* height: auto; */
    border: 2px solid #ffffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  .cardItemAdvanced {
    width: auto;
    background: #6d6d6d;
    border: 2px solid #6d6d6d;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  .Heading_Price {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    padding: 1rem;
    border-bottom: 1px solid #6d6d6d;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.black};
  }
  .Prices {
    display: flex;
    margin-top: 1rem;
    border-bottom: 1px solid #6d6d6d;
  }
  .Dollar {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.orange};
  }
  .ValueTime {
    display: block;
    padding-bottom: 1rem;
  }
  .Value {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 46px;
    color: ${({ theme }) => theme.colors.orange};
  }
  .Time {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 11px;
  }
  .TickSection {
    display: flex;
    margin-top: 2rem;
  }
  .TickText {
    padding-left: 1.5rem;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
  }
  .EnterpriseText {
    padding-left: 1.5rem;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
  }
  .ButtonText {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
  }
  .Heading_PriceAdvanced {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 24px;
    padding: 1rem;
    border-bottom: 1px solid #ffffff;
    margin-bottom: 0.5rem;
    color: #ffffff;
  }
  .PricesAdvanced {
    display: flex;
    margin-top: 1rem;
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
  }
  .DollarAdvanced {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    color: #ffffff;
  }
  .ValueTimeAdvanced {
    display: block;
    padding-bottom: 1rem;
  }
  .ValueAdvanced {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 46px;
    color: #ffffff;
  }
  .TimeAdvanced {
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 11px;
    color: #ffffff;
  }
  .TickSectionAdvanced {
    display: flex;
    margin-top: 2rem;
  }
  .TickTextAdvanced {
    padding-left: 1.5rem;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #ffffff;
  }
  .EnterpriseTextAdvanced {
    padding-left: 1.5rem;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #ffffff;
    color: #ffffff;
  }
  .ButtonTextAdvanced {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #232323;
  }
  .ButtonTextAdvanced:hover {
    color: #ffffff;
  }
  .Text-in-Card {
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
  }
`;
export const ReviewsWrapper = styled.div`
  .main {
    position: relative;
    background-color: green;
  }
`;
