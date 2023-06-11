import styled from "styled-components";
export const FooterWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  .Main {
    position: relative;
    background: ${({ theme }) => theme.colors.orange};
    text-align: center;
    height: 238px;
    padding: 10rem 5rem;
  }
  .Social {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    //background-color: green;
  }
  .FbIMG {
    margin-left: 0rem;
    width: 33px;
    height: 33px;
  }
  .InstaIMG {
    margin-left: 1rem;
    width: 33px;
    height: 33px;
  }
  .CopyRight {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    color: #ffffff;
  }
  .ant-image-mask:hover {
    opacity: 0;
  }
`;
