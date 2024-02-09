import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay, Mousewheel } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { Button, Flex } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import ProductCard from "./product-collection-card";
import Title from "antd/es/typography/Title";
import { useProducts } from "../../hooks/useProducts";

const ProductSection = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  //-------------------------------------------------------------------------------------------------------------------------
  const { getAllProducts } = useProducts();
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getData = async () => {
      const data = await getAllProducts();
      if(data){
        setProducts(data);
      }
      
    }
    getData();
  }, [])


  return (
    <section
      className="collection  py-10 px-4 my-4 flex flex-col justify-center items-center relative overflow-hidden"
      id="shop"
    >
      <Flex
        justify="space-between"
        align="center"
        wrap="wrap"
        className="mb-5 rounded-lg py-1 px-2 bg-[#F6F5F6] w-full"
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
      <Flex className="py-4 w-full">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={40}
          loop={true}
          mousewheel={false}
          autoplay={{ delay: 3500, disableOnInteraction: true }}
          keyboard={true}
          modules={[Navigation, Keyboard, Autoplay, Mousewheel]}
          ref={swiperRef}
          breakpoints={{
            0: {
              centeredSlides: true,
              centeredSlidesBounds: true,
              centerInsufficientSlides: true,
            },
            768: {
              centeredSlides: false,
              centeredSlidesBounds: false,
              centerInsufficientSlides: false,
            },
          }}
        >
          {
            products.map((product) => (
              <SwiperSlide key={product._id}>
                <ProductCard
                  product={product}
                />
              </SwiperSlide>
            ))
          }
          {/*----------- duplication because of loop-----------*/}
          {
            products.map((product) => (
              <SwiperSlide key={product.slug}>
                <ProductCard
                  product={product}
                />
              </SwiperSlide>
            ))
          }


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
