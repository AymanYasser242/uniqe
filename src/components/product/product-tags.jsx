import { Icon } from "@iconify/react";
import { Avatar, Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";



const ProductTags = () => {
  const details = {
    "brand": "Uniqe",
    "dimensions": {
      "height": 30,
      "width": 25,
      "depth": 10
    },
    "color": "Light Espresso",
    "region": "Made In Egypt",
    "weight": 300,
    "matrial": "wood"
  }
  const tags = [
    { icon: "system-uicons:ruler", value: `${details.dimensions.height}x${details.dimensions.width}x${details.dimensions.depth}`, unit: "cm" },
    { icon: "fluent:box-20-regular", value: details.weight, unit: "g" },
    { icon: "ph:meta-logo", value: details.brand, unit: "" },
    { icon: "mynaui:tree", value: details.matrial, unit: "" },
    { icon: "fluent:color-24-regular", value: details.color, unit: "" },

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
            {tag.value}{" "}
            <small className="text-gray-500 text-sm">{tag.unit}</small>
          </Paragraph>
        </Flex>
      ))}
    </Flex>
  );
};

export default ProductTags;
