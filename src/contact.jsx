import { Icon } from "@iconify/react";
import { Divider, Flex } from "antd";

import Title from "antd/es/typography/Title";

const Contact = () => {
  return (
    <section
      style={{
        backgroundImage: "url(waves.svg)",
      }}
      className="contact bg-cover py-20 bg-gray-100 text-center bg-no-repeat bg-top min-h-32"
      id="contact"
    >
      <div className="max-sm:px-5 mx-auto ">
        <section className=" max-w-lg mx-auto">
          <div className="flex items-center space-x-2 mb-4 justify-center">
            <span className="w-4 rounded h-1 bg-lime-700 block" />
            <p className="m-0 text-md text-lime-700 font-medium capitalize">
              Our Contacts
            </p>
          </div>
          <Title
            level={2}
            style={{
              fontWeight: 700,
            }}
          >
            Contact With Us Now
          </Title>
          <Flex
            justify="center"
            wrap="wrap"
            className="py-6 text-3xl md:text-4xl text-lime-600"
            gap={10}
          >
            <a className="text-gray-600">
              <Icon icon="ic:baseline-facebook" />
            </a>
            <Divider type="vertical" className="h-auto bg-gray-300" />
            <a className="text-gray-600">
              <Icon icon="ri:instagram-line" />
            </a>
            <Divider type="vertical" className="h-auto bg-gray-300" />
            <a className="text-gray-600">
              <Icon icon="icon-park-twotone:big-x" />
            </a>
            <Divider type="vertical" className="h-auto bg-gray-300" />
            <a className="text-gray-600">
              <Icon icon="ant-design:whats-app-outlined" />
            </a>
            <Divider type="vertical" className="h-auto bg-gray-300" />
            <a className="text-gray-600">
            <Icon icon="lucide:phone" />
            </a>
          </Flex>
        </section>
      </div>
    </section>
  );
};
export default Contact;
