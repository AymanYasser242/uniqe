import { Flex } from "antd";
import ExploreCard from "./explore-card";
import Title from "antd/es/typography/Title";
import { Icon } from "@iconify/react";

const Explore = () => {
  return (
    <Flex vertical justify="center" align="center" className="explore">
      <Flex
        justify="space-between"
        align="center"
        wrap="wrap"
        className="mb-5 rounded-lg py-1 px-2 bg-[#F6F5F6] w-full"
      >
        <Title className="main-title" level={3}>
          What Makes Us The Preferred
          <br />
          Choice ?
        </Title>
      </Flex>
      <Flex
        style={{
          position: "relative",
          marginTop: "1rem",
          marginBottom: "3rem",
        }}
        wrap="wrap"
        justify="center"
        gap={20}
      >
        <ExploreCard
          title="Easy Payments"
          description={
            "Simplify your transactions with our Easy Payments feature. Enjoy a hassle-free payment giving you peace of mind with every purchase."
          }
          icon={<Icon icon="ion:wallet" width={30} />}
        />
        <ExploreCard
          title="Promo Offers"
          description={
            "Unlock exclusive savings with our Promo Offers. Stay tuned for exciting deals and discounts that add value to your shopping experience."
          }
          icon={<Icon icon="bxs:offer" width={30} />}
        />
        <ExploreCard
          title="Fast Delivery"
          description={
            "Experience the convenience of Fast Delivery as we prioritize swift shipping to get your orders to your doorstep in no time."
          }
          icon={<Icon icon="mingcute:truck-fill" width={30} />}
        />
        <ExploreCard
          title="Easy Return"
          description={
            "Shop with confidence knowing that our Easy Return policy has you covered. If for any reason you're not satisfied with your purchase."
          }
          icon={<Icon icon="material-symbols-light:box" width={30} />}
        />
      </Flex>
    </Flex>
  );
};
export default Explore;
