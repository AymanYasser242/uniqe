import { Icon } from "@iconify/react";
import { Avatar, Col, Divider, Flex, Image, Row } from "antd";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay, Mousewheel } from "swiper/modules";
import ProductHero from "./product/product-hero-card";
import { products } from "../../data/products";

const Hero = () => {
  const swiperRef = useRef(null);

  return (
    <Row
      className="hero min-h-[80vh] bg-gray-100 pt-4 px-6  pb-10  relative"
      id="hero"
    >
      <div className="absolute bottom-[-48px] left-1/2 -translate-x-1/2">
        <Image
          src="/explore.svg"
          alt="explore now"
          preview={false}
          width={"200px"}
        />
      </div>
      <Col xs={{ span: 24 }} lg={{ span: 12 }} className="lg:pl-4">
        <Flex
          justify="center"
          align="flex-start"
          vertical
          gap={18}
          className="h-full"
        >
          <Flex
            gap={5}
            justify="space-between"
            align="center"
            className="bg-white p-1 rounded-full my-2"
          >
            <Avatar
              style={{
                backgroundColor: "rgba(104 , 130 ,114 ,0.1) ",
                padding: "0.2rem",
              }}
              icon={
                <Icon
                  icon="solar:lamp-bold-duotone"
                  color="#688272"
                  width={25}
                />
              }
            />
            <p className="m-0 mr-1 text-sm font-[500] text-gray-700">
              Wooden products store
            </p>
          </Flex>
          <img
            src="logo-text-only.svg"
            className="max-w-[200px] lg:max-w-[220px] -mb-2"
          />

          <h1 className="m-0 text-5xl leading-[4rem] font-[700]">
            Make Your Interior Minimal
            <br />
            <span
              style={{
                color: "#688272",
              }}
            >
              &
            </span>{" "}
            Modern
          </h1>
          <p className="text-gray-500 text-lg  m-0 font-[500] max-w-[90%]">
            Leading providers of high-quality wooden products.
          </p>
          <Flex className="w-full items-center justify-around sm:justify-start mb-5 md:mb-2">
            <h2 className="flex flex-col justify-between items-center text-center text-xl text-slate-800 gap-y-2 ">
              <span>Quality</span>
              <Icon icon="mdi:approve" width={38} className="text-[#688272]" />
            </h2>
            <Divider type="vertical" className="h-[50%] bg-gray-300 mx-5" />
            <h2 className="flex flex-col justify-between items-center text-center text-xl text-slate-800 gap-y-2">
              <span>Modern</span>
              <Icon
                icon="game-icons:desk-lamp"
                width={38}
                className="text-[#688272]"
              />
            </h2>
            <Divider type="vertical" className="h-[60%] bg-gray-300 mx-5" />
            <h2 className="flex flex-col justify-between items-center text-center text-xl text-slate-800 gap-y-2">
              <span>Smart</span>
              <Icon
                icon="mdi:head-idea"
                width={38}
                className="text-[#688272]"
              />
            </h2>
          </Flex>
        </Flex>
      </Col>
      <Col
        xs={{ span: 24 }}
        lg={{ span: 12 }}
        className="px-8 py-2 hidden lg:flex justify-end"
      >
        <Flex justify="center" className="max-w-full xl:max-w-[600px]">
          <Swiper
            slidesPerView="auto"
            spaceBetween={10}
            loop={true}
            mousewheel={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            keyboard={true}
            modules={[Navigation, Keyboard, Autoplay, Mousewheel]}
            ref={swiperRef}
            className="hero-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.title}>
                <ProductHero
                  src={`/produts/${product.slug}/optimized/img-3-min.jpg`}
                  title={product.title}
                  description="Modern Wooden Lamp"
                  id={product._id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Flex>
      </Col>
    </Row>
  );
};
export default Hero;
