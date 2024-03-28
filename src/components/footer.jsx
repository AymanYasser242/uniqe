import { Icon } from "@iconify/react";
import { Col, Divider, Flex, List, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

const MainFooter = () => {
  return (
    <Footer className="footer bg-[#061621] text-white px-0 py-1">
      <Row className="flex justify-between">
        <Col xs={{ span: 24 }} md={{ span: 8 }} className="px-4 md:px-10">
          <Title
            level={4}
            className="text-white text-opacity-80"
            style={{ color: "#fff" }}
          >
            Company Overview:
          </Title>
          <p className="text-white text-sm text-opacity-60 text-balance">
            Founded in 2023, Uniqe is a leading provider of high-quality wooden
            products, we are dedicated to offering customers a wide range of
            beautifully crafted wooden items that bring warmth, sustainability,
            and timeless elegance to homes and businesses.
          </p>
          <Flex className="py-4 text-2xl md:text-3xl text-lime-600" gap={15}>
            <a
              href="https://www.facebook.com/profile.php?id=61552485250311&mibextid=2JQ9oc"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300"
            >
              <Icon icon="ic:baseline-facebook" />
            </a>
            <Divider type="vertical" className="h-auto bg-gray-300" />
            <a
              href="https://www.instagram.com/uniqe_eg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noreferrer"
              className="text-slate-300"
            >
              <Icon icon="ri:instagram-line" />
            </a>
            <Divider type="vertical" className="h-auto bg-gray-300" />
            <a target="_blank" rel="noreferrer" className="text-slate-300">
              <Icon icon="icon-park-twotone:big-x" />
            </a>
            <Divider type="vertical" className="h-auto bg-gray-300" />
            <a
              href="https://api.whatsapp.com/send/?phone=201080875089"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300"
            >
              <Icon icon="ant-design:whats-app-outlined" />
            </a>
            <Divider type="vertical" className="h-auto bg-gray-300" />
            <a
              href="tel:+201080875089"
              target="_blank"
              rel="noreferrer"
              className="text-slate-300"
            >
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
            <List.Item>
              <a
                href="tel:+201080875089"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300"
              >
                Phone
              </a>
            </List.Item>
            <List.Item>
              <a
                href="https://api.whatsapp.com/send/?phone=201080875089"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300"
              >
                Whatsapp
              </a>
            </List.Item>
            <List.Item>
              <a
                href="https://www.facebook.com/profile.php?id=61552485250311&mibextid=2JQ9oc"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300"
              >
                FaceBook
              </a>
            </List.Item>
            <List.Item>
              <a
                href="https://www.instagram.com/uniqe_eg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="text-slate-300"
              >
                Instagram
              </a>
            </List.Item>
          </List>
        </Col>
      </Row>
      <Row>
        <Divider className="before:bg-gray-700 after:bg-gray-700  text-slate-300">
          <span className="text-slate-300">© All rights reserved 2024</span>
        </Divider>
        <Title
          level={5}
          className="w-full text-opacity-70  my-1 text-center flex justify-center items-center"
          style={{ color: "#c0c0c0", fontSize: "15px" }}
        >
          <Icon
            icon="ph:code-bold"
            width={20}
            className="px-2 text-[#688272]"
          />
          <a
            href="https://linktr.ee/aymanyasserofficial"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#c0c0c0", fontSize: "15px" }}
          >
            Developed By : Ayman Yasser
          </a>
        </Title>
        <Flex
          justify="center"
          wrap="wrap"
          className="w-full py-2 text-2xl  text-lime-600"
          gap={10}
        >
          <a
            href="https://www.facebook.com/ayman.yasser.39"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300"
          >
            <Icon icon="ic:baseline-facebook" />
          </a>
          <Divider type="vertical" className="h-auto bg-gray-300" />
          <a
            href="https://www.linkedin.com/in/ayman-yasser/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300"
          >
            <Icon icon="ri:linkedin-fill" />
          </a>

          <Divider type="vertical" className="h-auto bg-gray-300" />
          <a
            href="https://api.whatsapp.com/send/?phone=201279463663"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300"
          >
            <Icon icon="ant-design:whats-app-outlined" />
          </a>
          <Divider type="vertical" className="h-auto bg-gray-300" />
          <a
            href="tel:+201279463663"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300"
          >
            <Icon icon="lucide:phone" />
          </a>
        </Flex>
      </Row>
    </Footer>
  );
};
export default MainFooter;
