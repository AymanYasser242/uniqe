import { Carousel } from "antd";

const carouselData = [
  {
    title: "Give Your Interior Modern Look",
    content:
      "Transform your living space with our modern collections.",
  },
  {
    title: "Crafted Perfectly Just For You",
    content:
      "Each piece is crafted to suit your taste and style preferences.",
  },
  {
    title: "High Quality Wood & Materials",
    content:
      "Experience the quality with our selected materials.",
  },
];

const CarouselSlider = () => {
  return (
    <Carousel autoplay infinite autoplaySpeed={25000} className="main-carousel">
      {carouselData.map((slide, index) => (
        <div key={index}>
          <div className="text-wrapper">
            <h3 className="text-3xl md:text-4xl">{slide.title}</h3>
            <p className="text-base md:text-lg">{slide.content}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
