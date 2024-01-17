import { Icon } from "@iconify/react";
import { Avatar, Col, Divider, Flex, Image, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import ProductHero from "./product/product-hero-card";
const Hero = () => {
  const swiperRef = useRef(null);

  return (
    <Row className="hero bg-[#f3f4f6] pt-6 px-6  pb-10 relative" id="hero">
      <div className="absolute bottom-[-48px] left-1/2 -translate-x-1/2">
        <Image
          src="/explore.svg"
          alt="explore now"
          preview={false}
          width={"200px"}
        />
      </div>
      <Col xs={{ span: 24 }} md={{ span: 12 }} className="lg:pl-4">
        <Flex
          justify="center"
          align="flex-start"
          vertical
          gap={18}
          className="h-full"
        >
          <Image
            src="logo.svg"
            preview={false}
            className="md:block hidden md:max-w-[220px]"
          />
          <Flex
            gap={5}
            justify="space-between"
            align="center"
            style={{
              background: "#fff",
              borderRadius: "999px",
              padding: "0.3rem",
            }}
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
            <Paragraph
              style={{
                margin: "0",
                marginRight: "5px",
                fontWeight: 500,
              }}
            >
              Wooden products store
            </Paragraph>
          </Flex>
          <Title
            level={1}
            style={{
              fontWeight: 700,
              fontSize: "3rem",
              margin: 0,
            }}
          >
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
          </Title>
          <Paragraph
            style={{
              color: "rgb(113 113 113",
              fontSize: "larger",
              fontWeight: 500,
              marginBottom: 0,
            }}
          >
            Leading providers of high-quality wooden products.
          </Paragraph>
          <Flex className="w-full items-center justify-between sm:justify-start mb-5 md:mb-2">
            <h2 className="flex flex-col justify-between items-center text-center text-slate-800 gap-y-2 md:text-xl">
              <span>Quality</span>
              <Icon icon="mdi:approve" width={35} className="text-[#688272]" />
            </h2>
            <Divider type="vertical" className="h-[50%] bg-gray-300 mx-6" />
            <h2 className="flex flex-col justify-between items-center text-center text-slate-800 gap-y-2">
              <span>Modern</span>
              <Icon
                icon="game-icons:light-bulb"
                width={35}
                className="text-[#688272]"
              />
            </h2>
            <Divider type="vertical" className="h-[50%] bg-gray-300 mx-6" />
            <h2 className="flex flex-col justify-between items-center text-center text-slate-800 gap-y-2">
              <span>Smart</span>
              <Icon icon="la:atom" width={35} className="text-[#688272]" />
            </h2>
          </Flex>
        </Flex>
      </Col>
      <Col
        xs={{ span: 24 }}
        md={{ span: 12 }}
        className="px-16 py-2 hidden md:flex justify-end"
      >
        <Flex justify="center" className="max-w-full xl:max-w-[550px]">
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            mousewheel={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            keyboard={true}
            modules={[Navigation, Keyboard, Autoplay]}
            ref={swiperRef}
          >
            <SwiperSlide>
              <ProductHero
                src="product-2.jpg"
                title="Retro Rocket Lamp"
                description="Sculpture Wooden Lamp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductHero
                src="product-3.jpg"
                title="Articulated Design Lamp"
                description="Wooden design Table Lamp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductHero
                src="product-1.jpg"
                title="Articulated Design Lamp"
                description="Wooden design Table Lamp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductHero
                src="product-4.jpg"
                title="Articulated Design Lamp"
                description="Wooden design Table Lamp"
              />
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Col>
    </Row>
  );
};
export default Hero;
