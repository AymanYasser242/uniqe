import { Image, Card, Rate, Divider } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";

const ProductHero = ({ src, title, description }) => {
  return (
    <Card cover={<Image src={src} />} hoverable>
      <Link to="/product/warrior-lamp">
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
