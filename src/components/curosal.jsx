import { Carousel } from "antd";

const carouselData = [
  {
    img: "/carousel-5.jpg",
    title: "Give Your Interior Modern Look",
    content: "Transform your living space with our modern collections.",
  },
  {
    img: "/wood-carving-1536x776.jpeg",
    title: "Crafted Perfectly Just For You",
    content: "Each piece is crafted to suit your taste and style preferences.",
  },
  {
    img: "/WOOD-MATERIAL-FEATURE.jpg",
    title: "High Quality Wood & Materials",
    content: "Experience the quality with our selected materials.",
  },
];

const CarouselSlider = () => {
  return (
    <Carousel autoplay infinite autoplaySpeed={3000} className="main-carousel">
      {carouselData.map((slide) => (
        <div
          key={slide.title}
          className="relative max-h-[550px] aspect-video overflow-hidden"
        >
          <img
            alt="carousel-img"
            className="absolute inset-0 object-cover w-full h-full"
            src={slide.img}
            loading="lazy"
          />
          <div className="absolute inset-0 w-full h-full">
            <div className="bg-black bg-opacity-60 w-full h-full font-['Inter'] flex flex-col items-center justify-center">
              <h3 className=" text-xl sm:text-4xl  text-center font-bold  capitalize  font-['Inter'] leading-none text-white my-1 mx-3">
                {slide.title}
              </h3>
              <p className="text-xs sm:text-lg  capitalize text-center text-gray-300 max-w-md my-1 mx-3">
                {slide.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselSlider;
