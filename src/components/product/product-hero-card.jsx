import { Image, Card, Rate, Divider } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";

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
      <Link to="/product/123">
        <Meta title={title} description={description} />
        <Divider
          style={{
            margin: "15px 0",
          }}
        />
        <Rate allowHalf disabled defaultValue={4.5} />
      </Link>
    </Card>
  );
};
export default ProductHero;
