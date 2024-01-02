import { Carousel } from "antd";

const CarouselSlider = () => {
  return (
    <Carousel autoplay infinite autoplaySpeed={40000} className="main-carousel">
      <div>
        <h3>Give Your Interior Modern Look</h3>
      </div>
      <div>
        <h3>Crafted Perfectly Just For You</h3>
      </div>
      <div>
        <h3>High Quilty Wood & Matrials</h3>
      </div>
    </Carousel>
  );
};
export default CarouselSlider;
