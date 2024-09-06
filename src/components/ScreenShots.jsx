import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function ScreenShots({ project }) {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          550: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 1,
          },
        }}
        className="screen-shots-container"
      >
        {project?.screenShots.map((item, index) => (
          <SwiperSlide key={index} className="img-slide">
            <img id="img" src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
