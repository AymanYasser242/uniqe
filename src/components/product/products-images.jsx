import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";
import { Image } from "antd";

const ProductsImages = ({ images, slug }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="products-images">
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        autoplay={{ delay: 3000 }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Autoplay, Thumbs]}
        className="mySwiper1"
      >
        {images.map((filename, index) => (
          <SwiperSlide key={index}>
            <Image
              preview
              src={`/produts/${slug}/optimized/${filename}`}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
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
        {images.map((filename, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/produts/${slug}/thumbnails/${filename}`}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsImages;
