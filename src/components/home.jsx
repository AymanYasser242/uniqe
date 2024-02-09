import Hero from "./hero";
import Explore from "./explore";
import CarouselSlider from "./curosal";
import Contact from "./contact";
import ProductSection from "./product/products-section";


const HomePage = () => {
  return (
    <section className="home">
      <Hero />
      <ProductSection />
      <CarouselSlider />
      <Explore />
      <Contact />
    </section>
  );
};
export default HomePage;
