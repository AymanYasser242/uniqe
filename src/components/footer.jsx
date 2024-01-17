import { Icon } from "@iconify/react";
import { Col, Divider, Flex, List, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

const MainFooter = () => {
  return (
    <Footer className="footer bg-[#131B23] text-white px-0 py-1">
      <Row className="flex justify-between">
        <Col xs={{ span: 24 }} md={{ span: 8 }} className="px-4 md:px-10">
          <Title
            level={4}
            className="text-white text-opacity-80"
            style={{ color: "#fff" }}
          >
            Company Overview:
          </Title>
          <Paragraph className="text-white text-opacity-60 text-pretty">
            Founded in 2023, Uniqe is a leading provider of high-quality wooden
            products, we are dedicated to offering customers a wide range of
            beautifully crafted wooden items that bring warmth, sustainability,
            and timeless elegance to homes and businesses.
          </Paragraph>
          <Flex className="py-4 text-2xl md:text-3xl text-lime-600" gap={15}>
            <a className="text-slate-300">
              <Icon icon="ic:baseline-facebook" />
            </a>
            <Divider type="vertical" className="h-auto bg-gray-300" />
            <a className="text-slate-300">
              <Icon icon="ri:instagram-line" />
            </a>
            <Divider type="vertical" className="h-auto bg-gray-300" />
            <a className="text-slate-300">
              <Icon icon="icon-park-twotone:big-x" />
            </a>
            <Divider type="vertical" className="h-auto bg-gray-300" />
            <a className="text-slate-300">
              <Icon icon="ant-design:whats-app-outlined" />
            </a>
            <Divider type="vertical" className="h-auto bg-gray-300" />
            <a className="text-slate-300">
              <Icon icon="lucide:phone" />
            </a>
          </Flex>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }} className="px-4 md:px-10">
          <List
            header={
              <Title
                level={4}
                className="text-white text-opacity-80 my-0"
                style={{ color: "#fff" }}
              >
                Contact
              </Title>
            }
          >
            <List.Item>Phone</List.Item>
            <List.Item>FaceBook</List.Item>
            <List.Item>Instagram</List.Item>
            <List.Item>Twitter</List.Item>
            <List.Item>Whatsapp</List.Item>
            <List.Item></List.Item>
          </List>
        </Col>
      </Row>
      <Row>
        <Divider className="before:bg-gray-700 after:bg-gray-700  text-slate-300">
          <span className="text-slate-300">© All rights reserved 2024</span>
        </Divider>
        <Title
          level={5}
          className="w-full text-opacity-70  font my-2 text-center flex justify-center items-center"
          style={{ color: "#c0c0c0", fontSize: "15px" }}
        >
          <Icon
            icon="ph:code-bold"
            width={20}
            className="px-2 text-[#688272]"
          />{" "}
          Developed By : Ayman Yasser
        </Title>
        <Flex
          justify="center"
          wrap="wrap"
          className="w-full py-6 text-2xl  text-lime-600"
          gap={15}
        >
          <a className="text-slate-300">
            <Icon icon="ic:baseline-facebook" />
          </a>
          <Divider type="vertical" className="h-auto bg-gray-300" />
          <a className="text-slate-300">
            <Icon icon="ri:linkedin-fill" />
          </a>

          <Divider type="vertical" className="h-auto bg-gray-300" />
          <a className="text-slate-300">
            <Icon icon="ant-design:whats-app-outlined" />
          </a>
          <Divider type="vertical" className="h-auto bg-gray-300" />
          <a className="text-slate-300">
            <Icon icon="lucide:phone" />
          </a>
        </Flex>
      </Row>
    </Footer>
  );
};
export default MainFooter;
