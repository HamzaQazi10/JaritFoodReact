import styled from "styled-components";
import ImageReview from "../../../image/review.png";
export const ReviewsWrapper = styled.div`
  .main {
    position: relative;
    display: block;

    //background-color: green;
    /*     background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hxIGIRPVvvpnSQjDGNI0undzKEHbVYvWe-7bvt9W4A&s");
    background-size: cover; */
    //background-image: url(ImageReview);
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 8rem;
    //position: sticky;
    margin-top: 2.8rem; //I have to remove this after uncommenting modal-wrapper right, left property
    background-color: ${({ theme }) => theme.colors.white};
    //background-color: red;
    //z-index: 1000;
  }
  .BackgroundImg {
    text-align: center;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    margin: 0 0;
  }
  .ant-image .ant-image-mask:hover {
    opacity: 0;
  }
  .IconReview {
    position: absolute;
    text-align: center;
    top: 10px;
    //background-color: red;
    z-index: 100;
  }
  .Reviews {
    position: absolute;
    top: 168px;
    margin-top: 6rem;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 200;
    font-size: 41.9011px;
    line-height: 46px;
    color: #ffffff;
    //background-color: red;
    width: 100%;
    top: 0;
    padding-top: 0rem;
  }
  .navbar {
    position: absolute;
    //padding: 10rem;
    top: 68px;
    right: 0;
    left: 0;
    background-color: transparent;
  }
  .Review_text {
    padding: 0 2rem;
    padding-top: 4rem;
  }
  .menu {
    align-items: center;
    background-color: green;
    justify-content: space-between;
  }
  .Customer_Review {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 300;
    font-size: 10.7605px;
    line-height: 27px;
    color: #ffffff;
    text-align: center;
  }
  .Titles {
    font-family: "Open Sans" sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18.8555px;
    line-height: 34px;
    padding-bottom: 2rem;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
  }
`;
