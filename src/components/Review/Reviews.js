import React from "react";
import { ReviewsWrapper } from "./styles/ReviewsWrapper";
import ImageReview from "../../image/review.png";
import IconReview from "../../image/icon reviews.png";
import { Image } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
/* ----ICON REVIEW IS NOT SHOWING----- */
function Reviews() {
  return (
    <ReviewsWrapper>
      <div className="main">
        <img
          src={ImageReview}
          className="BackgroundImg"
          width="500rem"
          height={"400rem"}
        />
        <img src={IconReview} className="IconReview" />
        <div className="Reviews">Reviews</div>
        <div className="navbar">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            //spaceBetween={6}
            navigation
            pagination={{ clickable: true }}
            //scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{
              //backgroundColor: "red",
              "--swiper-navigation-color": "1px solid black",
              "--swiper-navigation-inactive-color": "gray",
              "--swiper-navigation-border-radius": "1px solid white",
              "--swiper-navigation-inactive-opacity": "1",
              "--swiper-navigation-size": "16px",
              "--swiper-theme-color": "red",
              "--swiper-pagination-bullet-inactive-color": "white",
              //"--swiper-navigation-left": "0",
            }}
          >
            <div className="menu">
              <SwiperSlide className="Customer_Review">
                <div className="Review_text">
                  Experiencing Takilah was an absolute delight! Witnessing the
                  realistic 3D rendition of my prospective lunch got my taste
                  buds tingling and my mouth watering. It truly stimulates your
                  appetite and adds an extra layer of excitement to the dining
                  experience!
                </div>
                <div className="Titles">Emily Ava</div>
              </SwiperSlide>
              <SwiperSlide className="Customer_Review">
                <div className="Review_text">
                  Experiencing Takilah was an absolute delight! Witnessing the
                  realistic 3D rendition of my prospective lunch got my taste
                  buds tingling and my mouth watering. It truly stimulates your
                  appetite and adds an extra layer of excitement to the dining
                  experience!
                </div>
                <div className="Titles">Emily Ava</div>
              </SwiperSlide>
              <SwiperSlide className="Customer_Review">
                <div className="Review_text">
                  Experiencing Takilah was an absolute delight! Witnessing the
                  realistic 3D rendition of my prospective lunch got my taste
                  buds tingling and my mouth watering. It truly stimulates your
                  appetite and adds an extra layer of excitement to the dining
                  experience!
                </div>
                <div className="Titles">Emily Ava</div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </ReviewsWrapper>
  );
}

export default Reviews;
