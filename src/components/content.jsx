import { Content } from "antd/es/layout/layout";
import Hero from "./hero";
import Explore from "./explore";
import CarouselSlider from "./curosal";
import Contact from "./contact";
import ProductSection from "./product/products-section";

const MainContent = () => {
  return (
    <Content>
      <Hero />
      <ProductSection />
      <CarouselSlider />
      <Explore />
      <Contact />
    </Content>
  );
};
export default MainContent;
