import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay, Mousewheel } from "swiper/modules";
import { useRef } from "react";
import { Button, Flex, Image } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import ProductCard from "./product-collection-card";
import Title from "antd/es/typography/Title";

const ProductSection = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    console.log(swiperRef.current.swiper);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="collection py-10 px-4 my-4 flex flex-col justify-center items-center relative">
      <Image
        src="explore.svg"
        alt="explore now"
        preview={false}
        width={"200px"}
        style={{
          position: "absolute",
          top: "-110px",
          left: 0,
          zIndex: 999,
        }}
      />
      <Flex
        justify="space-between"
        align="center"
        wrap="wrap"
        className="mb-5 rounded-lg py-1 px-2 bg-[#F3F4F6] w-full"
      >
        <Title level={3} className="main-title">
          Discover Our Best Products
          <br />
          Collection
        </Title>
        <Flex
          justify="center"
          align="center"
          gap={20}
          style={{
            padding: "1rem",
          }}
          className="hidden sm:flex"
        >
          <Button
            className="btn-swiper-previous rounded-full"
            icon={<ArrowLeftOutlined />}
            onClick={handlePrevClick}
            size="large"
          />
          <Button
            className="btn-swiper-next rounded-full"
            icon={<ArrowRightOutlined />}
            onClick={handleNextClick}
            size="large"
          />
        </Flex>
      </Flex>
      <Flex className="py-4 max-w-full">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={40}
          loop={true}
          mousewheel={true}
          autoplay={{ delay: 3500 , disableOnInteraction : true }}
          keyboard={true}
          modules={[Navigation, Keyboard, Autoplay, Mousewheel]}
          ref={swiperRef}
          breakpoints={{
            0 : {
              centeredSlides: true,
              centeredSlidesBounds : true
            },
            500 : {
              centeredSlides: false,
              centeredSlidesBounds : false
            }
          }}
        >
          <SwiperSlide>
            <ProductCard
              src="product (2).jpg"
              title="Retro Rocket Lamp"
              description="Sculpture Wooden Lamp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              src="product (3).jpg"
              title="Articulated Design Lamp"
              description="Wooden design Table Lamp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              src="product (1).jpg"
              title="Articulated Design Lamp"
              description="Wooden design Table Lamp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              src="product (4).jpg"
              title="Articulated Design Lamp"
              description="Wooden design Table Lamp"
            />
          </SwiperSlide>
        </Swiper>
      </Flex>
      <Flex
        justify="center"
        align="center"
        gap={20}
        style={{
          padding: "1rem",
        }}
      >
        <Button
          className="btn-swiper-previous rounded-full"
          icon={<ArrowLeftOutlined />}
          onClick={handlePrevClick}
          size="large"
        />
        <Button
          className="btn-swiper-next rounded-full"
          icon={<ArrowRightOutlined />}
          onClick={handleNextClick}
          size="large"
        />
      </Flex>
    </section>
  );
};
export default ProductSection;
