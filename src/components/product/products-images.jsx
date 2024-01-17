import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";
import { Image } from "antd";

const ProductsImages = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="products-images">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3500 }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Autoplay, Thumbs]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <Image preview src="/product-1.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <Image preview src="/product-2.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <Image preview src="/product-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image preview src="/product-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <Image preview src="/product-2.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="/product-1.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/product-2.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="/product-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/product-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/product-2.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsImages;
