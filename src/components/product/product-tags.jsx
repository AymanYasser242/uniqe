import { Icon } from "@iconify/react";
import { Avatar, Flex } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const tags = [
  { icon: "system-uicons:ruler", value: "50x15", unit: "cm" },
  { icon: "fluent:box-20-regular", value: "1", unit: "kg" },
  { icon: "ph:meta-logo", value: "uniqe", unit: "" },
  { icon: "mynaui:tree", value: "wood", unit: "" },
  // Add more tags as needed
];

const ProductTags = () => {
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
