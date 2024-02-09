import { Image, Card, Rate, Divider, Button, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import Paragraph from "antd/es/typography/Paragraph";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handelClick = () => {
    navigate(`/product/${product.slug}`);
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
          style={{
            borderRadius: "8px",
          }}
          height={"100%"}
          width={"100%"}
          className="max-w-full max-h-[260px] md:max-h-full min-w-[280px] object-cover"
        />
      }
      className="max-w-[320px] md:max-w-[550px] md:h-[350px] h-full flex flex-col md:flex-row flex-nowrap p-3 "
      hoverable
      bordered
    >
      <Link to={`/product/${product.slug}`}>
        <Flex vertical className="h-auto" justify="space-between">
          <Meta title={product.title} description={<Paragraph
            className="text-gray-500 "
            ellipsis={{ rows: 2, expandable: false }}
          >
            {product.description}
          </Paragraph>} />
          <Rate allowHalf defaultValue={product.rating} disabled className="py-1" />
          <p className="price-eg text-black text-xl pt-4 pb-1 font-[600] m-0">
            {`${product.price.eg.discounted}${product.price.eg.currency}`}
            <span className="px-2 text-base font-[500] line-through text-gray-400">
              {`${product.price.eg.original}${product.price.eg.currency}`}
            </span>
          </p>
          <p className="price-usd text-black text-xl pb-4 pt-1 font-[600] m-0">
            {`${product.price.usd.discounted}${product.price.usd.currency}`}
            <span className="px-1 text-base font-[500] line-through text-gray-400">
              {`${product.price.usd.original}${product.price.usd.currency}`}
            </span>
          </p>
          <Divider className="mb-6 mt-4" />
          <Button
            shape="round"
            type="primary"
            role="link"
            size="large"
            onClick={handelClick}
          >
            Preview
          </Button>
        </Flex>
      </Link>
    </Card>
  );
};
export default ProductCard;
