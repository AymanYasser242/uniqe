import { Image, Card, Rate, Divider } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";

const ProductHero = ({ src, title, description, id }) => {
  return (
    <Card
      cover={<Image src={src} className="object-cover" loading="lazy" />}
      hoverable
      bordered
    >
      <Link to={`/product/${id}`}>
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
