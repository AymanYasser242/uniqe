import { Image, Card, Rate, Divider, Button, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import Paragraph from "antd/es/typography/Paragraph";
import {  Link, useNavigate } from "react-router-dom";

const ProductCard = ({ src, title, description }) => {
  const navigate = useNavigate();
  return (
    
      <Card
        cover={
          <Image
            src={src}
            style={{
              borderRadius: "8px",
            }}
            className="w-full h-full sm:w-auto sm:max-h-[300px] "
          />
        }
        className="max-w-[300px] sm:max-w-full w-auto min-h-full p-3 flex flex-row flex-wrap"
        hoverable
        bordered
      >
      <Link to="/product/123">
        <Flex vertical className="h-auto" justify="space-between">
          <Meta title={title} description={description} />
          <Rate allowHalf defaultValue={4.5} disabled className="py-6" />
          <Paragraph className="text-xl font-semibold capitalize">
            Price ${`40.00`}
          </Paragraph>
          <Divider className="mb-6 mt-0" />
          <Button
            shape="round"
            type="primary"
            role="link"
            size="large"
            onClick={() => navigate("/product/123")}
          >
            Preview
          </Button>
        </Flex>
        </Link>
      </Card>
    
  );
};
export default ProductCard;
