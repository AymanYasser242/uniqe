import { Image, Card, Rate, Divider, Button, Flex } from "antd";
import Meta from "antd/es/card/Meta";
import Paragraph from "antd/es/typography/Paragraph";

const ProductCard = ({ src, title, description }) => {
  return (
    <Card
      cover={
        <Image
          src={src}
          style={{
            borderRadius: "8px",
          }}
          className="w-full h-full sm:w-auto sm:max-h-[300px]"
        />
      }
      className="max-w-[300px] sm:max-w-full w-auto min-h-full p-2 flex flex-row flex-wrap"
      hoverable
      bordered
    >
      <Flex vertical className="h-auto" justify="space-between">
        <Meta title={title} description={description} />
        <Rate allowHalf defaultValue={4.5} className="py-6" />
        <Paragraph className="text-xl font-semibold capitalize">
          Price ${100}
        </Paragraph>
        <Divider className="mb-6 mt-0" />
        <Button shape="round" type="primary" size="large">
          Buy Now
        </Button>
      </Flex>
    </Card>
  );
};
export default ProductCard;
