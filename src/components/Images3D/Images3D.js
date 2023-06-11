import React from "react";
import { Images3DWrapper } from "./styles/Images3DWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../../image/1.png";
import Image2 from "../../image/1 (2).png";
import Image3 from "../../image/1 (3).png";
import Image4 from "../../image/1 (4).png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Images3D() {
  return (
    <Images3DWrapper>
      <div className="DText">OUR 3D DISHES</div>
      <div className="DownloadText">
        Download TIKALAH and try it yourself with the 3D dishes we’ve prepared
        specifically
      </div>
      <div className="navbar">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4}
          //spaceBetween={6}
          navigation
          //pagination={{ clickable: true }}
          //scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{
            //backgroundColor: "red",
            "--swiper-navigation-color": "1px solid white",
            "--swiper-navigation-inactive-color": "white",
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
              <div className="Images_Section">
                <img src={Image1} width={"100%"} />
              </div>
              <div className="Titles">MEAT & VEGGIES</div>
            </SwiperSlide>
            <SwiperSlide className="Customer_Review">
              <div className="Images_Section">
                <img src={Image2} width={"100%"} />
              </div>
              <div className="Titles">VEGGIES</div>
            </SwiperSlide>
            <SwiperSlide className="Customer_Review">
              <div className="Images_Section">
                <img src={Image3} width={"100%"} />
              </div>
              <div className="Titles">JUICY BURGERS</div>
            </SwiperSlide>
            <SwiperSlide className="Customer_Review">
              <div className="Images_Section">
                <img src={Image4} width={"100%"} />
              </div>
              <div className="Titles">FIT & WHOLESOME</div>
            </SwiperSlide>
            <SwiperSlide className="Customer_Review">
              <div className="Images_Section">
                <img src={Image3} width={"100%"} />
              </div>
              <div className="Titles">Emily Ava</div>
            </SwiperSlide>
            <SwiperSlide className="Customer_Review">
              <div className="Images_Section">
                <img src={Image4} width={"100%"} />
              </div>
              <div className="Titles">Emily Ava</div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </Images3DWrapper>
  );
}

export default Images3D;
