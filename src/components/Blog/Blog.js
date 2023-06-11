import React from "react";
import { BlogWrapper } from "./styles/BlogWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "../../image/hero-image.fill.size_672x378.v1684408794.jpg.png";
import Image2 from "../../image/hero-image.fill.size_672x378.v1684347143.jpg.png";
import Image3 from "../../image/hero-image.fill.size_672x378.v1683652628.jpg.png";
import Image4 from "../../image/hero-image.fill.size_672x378.v1684169848.jpg.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Blog() {
  return (
    <BlogWrapper>
      <div className="DownloadText">Read the News</div>
      <div className="DText">Our Latest Blogs</div>
      <div className="navbar">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4}
          //spaceBetween={6}
          navigation
          pagination={{ clickable: true }}
          //scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          style={{
            //backgroundColor: "red",
            "--swiper-navigation-color": "1px solid white",
            "--swiper-navigation-inactive-color": "black",
            "--swiper-navigation-border-radius": "1px solid white",
            "--swiper-navigation-inactive-opacity": "1",
            "--swiper-navigation-size": "16px",
            "--swiper-theme-color": "red",
            /*             "--swiper-pagination-bullet-inactive-color": "white",
            "--swiper-pagination-bullet-inactive-border": "1px solid black", */
            //"--swiper-navigation-left": "0",
          }}
        >
          <div className="menu">
            <SwiperSlide className="Customer_Review">
              <div className="Date">January 27, 2023</div>
              <div className="Images_Section">
                <img src={Image1} width={"100%"} />
              </div>
              <div className="Titles">
                Augmented reality and virtual reality are the new word and
                perhaps even the core asset in experiential marketing, the type
                of marketing that millennials are especially fond of. The
                representatives of...
              </div>
            </SwiperSlide>
            <SwiperSlide className="Customer_Review">
              <div className="Date">January 27, 2023</div>
              <div className="Images_Section">
                <img src={Image2} width={"100%"} />
              </div>
              <div className="Titles">
                Augmented reality and virtual reality are the new word and
                perhaps even the core asset in experiential marketing, the type
                of marketing that millennials are especially fond of. The
                representatives of...
              </div>
            </SwiperSlide>
            <SwiperSlide className="Customer_Review">
              <div className="Date">January 27, 2023</div>
              <div className="Images_Section">
                <img src={Image3} width={"100%"} />
              </div>
              <div className="Titles">
                Augmented reality and virtual reality are the new word and
                perhaps even the core asset in experiential marketing, the type
                of marketing that millennials are especially fond of. The
                representatives of...
              </div>
            </SwiperSlide>
            <SwiperSlide className="Customer_Review">
              <div className="Date">January 27, 2023</div>
              <div className="Images_Section">
                <img src={Image4} width={"100%"} />
              </div>
              <div className="Titles">
                Augmented reality and virtual reality are the new word and
                perhaps even the core asset in experiential marketing, the type
                of marketing that millennials are especially fond of. The
                representatives of...
              </div>
            </SwiperSlide>
            <SwiperSlide className="Customer_Review">
              <div className="Date">January 27, 2023</div>
              <div className="Images_Section">
                <img src={Image3} width={"100%"} />
              </div>
              <div className="Titles">
                Augmented reality and virtual reality are the new word and
                perhaps even the core asset in experiential marketing, the type
                of marketing that millennials are especially fond of. The
                representatives of...
              </div>
            </SwiperSlide>
            <SwiperSlide className="Customer_Review">
              <div className="Date">January 27, 2023</div>
              <div className="Images_Section">
                <img src={Image4} width={"100%"} />
              </div>
              <div className="Titles">
                Augmented reality and virtual reality are the new word and
                perhaps even the core asset in experiential marketing, the type
                of marketing that millennials are especially fond of. The
                representatives of...
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </BlogWrapper>
  );
}

export default Blog;
