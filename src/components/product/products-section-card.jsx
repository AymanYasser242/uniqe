import { Image, Card, Rate, Divider, Button, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate(`/product/${product._id}`);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Card
      cover={
        <Image
          src={`/produts/${product.slug}/optimized/${product.images[0]}`}
          alt="product-img"
        />
      }
      className="products-section-card"
      hoverable
      bordered
    >
      <Link to={`/product/${product._id}`}>
        <Flex vertical className="h-auto" justify="space-between">
          <Meta title={<h3 className="m-0 mb-2">{product.title} </h3>} />
          <Rate
            allowHalf
            defaultValue={product.rating}
            disabled
            className="pt-2"
          />
          <p className="price-eg text-black text-xl pt-4 pb-1 font-[600] m-0">
            {product.priceEG}LE
            <small className="px-2 text-base font-[500] line-through text-gray-400">
              {Math.round(product.priceEG / (1 - product.discount / 100))}LE
            </small>
          </p>
          <p className="price-usd text-black text-xl pb-4 pt-1 font-[600] m-0">
            {product.priceUSD}$
            <small className="px-1 text-base font-[500] line-through text-gray-400">
              {Math.round(product.priceUSD / (1 - product.discount / 100))}$
            </small>
          </p>
          <Divider className="mb-6 mt-4" />
          <Button
            shape="round"
            type="primary"
            role="link"
            size="large"
            onClick={handelClick}
            className="w-full"
          >
            Preview
          </Button>
        </Flex>
      </Link>
    </Card>
  );
};
export default ProductCard;
