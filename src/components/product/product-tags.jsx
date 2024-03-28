import { Icon } from "@iconify/react";
import { Avatar, Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const ProductTags = ({ product }) => {
  const tags = [
    {
      icon: "system-uicons:ruler",
      value: `${product.height}x${product.width}x${product.depth}`,
      unit: "cm",
    },
    { icon: "fluent:box-20-regular", value: product.weight, unit: "g" },
    { icon: "ph:meta-logo", value: product.brand, unit: "" },
    { icon: "mynaui:tree", value: product.material, unit: "" },
    { icon: "fluent:color-24-regular", value: product.color, unit: "" },
  ];

  return (
    <Flex gap={15} wrap="wrap" justify="flex-start">
      {tags.map((tag, index) => (
        <Flex
          key={index}
          gap={5}
          justify="space-between"
          align="center"
          className="bg-white rounded-full shadow-sm p-1"
        >
          <Avatar
            style={{
              backgroundColor: "rgba(104 , 130 ,114 ,0.1) ",
              padding: "0.2rem",
            }}
            icon={<Icon icon={tag.icon} color="#688272" width={25} />}
          />
          <Paragraph
            style={{
              margin: "0",
              marginRight: "5px",
            }}
          >
            {tag.value}
            <small className="text-gray-500 text-sm">{tag.unit}</small>
          </Paragraph>
        </Flex>
      ))}
    </Flex>
  );
};

export default ProductTags;
