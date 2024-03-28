import Hero from "./hero";
import Explore from "./features";
import CarouselSlider from "./curosal";
import Contact from "./contact";
import ProductSection from "./product/products-section";


const HomePage = () => {
  return (
    <section className="home flex flex-col gap-y-10">
      <Hero />
      <ProductSection />
      <CarouselSlider />
      <Explore />
      <Contact />
    </section>
  );
};
export default HomePage;
