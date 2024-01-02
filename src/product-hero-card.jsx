import { Image, Card, Rate, Divider } from "antd";
import Meta from "antd/es/card/Meta";

const ProductHero = ({ src, title, description }) => {
  return (
    <Card
      cover={<Image src={src} />}
      style={{
        width: 260,
        padding: "0.5rem",
      }}
      hoverable
    >
      <Meta title={title} description={description} />
      <Divider
        style={{
          margin: "15px 0",
        }}
      />
      <Rate allowHalf defaultValue={4.5} />
    </Card>
  );
};
export default ProductHero;
