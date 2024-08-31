import parse from "html-react-parser";
import { techStack as items } from "../assets/icon/about";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function TechCarousel() {
  return (
    <div className="tech-container">
      <div className="carousel-wrapper">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            550: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card">{parse(item.icon)}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
