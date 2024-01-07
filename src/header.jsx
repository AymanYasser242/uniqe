import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  BarsOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Flex, Image, Menu, Drawer, Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Header className="main-header  relative md:sticky top-0 z-[999]">
      <Flex justify="space-between" align="center" component="nav">
        <Link to="/">
          <Image
            src="logo-header.svg"
            className="header-logo"
            preview={false}
           
          />
        </Link>
        <Flex className="header-links hidden md:block transform -translate-x-11">
          <a href="#hero">Home</a>
          <a href="#shop">Shop</a>
          <a href="#contact">Contact</a>
        </Flex>
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          open={drawerOpen}
          width={300}
        >
          <Menu mode="vertical">
            <Menu.Item key="home" icon={<AppstoreOutlined />}>
              <a href="#hero">Home</a>
            </Menu.Item>
            <Menu.Item key="shop" icon={<ShoppingCartOutlined />}>
              <a href="#shop">Shop</a>
            </Menu.Item>
            <Menu.Item key="contact" icon={<MailOutlined />}>
              <a href="#contact">Contact</a>
            </Menu.Item>
          </Menu>
        </Drawer>

        {/* Hamburger Menu Button for Mobile */}
        <Button
          type="text"
          onClick={showDrawer}
          style={{
            height: "auto",
          }}
          icon={
            <BarsOutlined
              style={{
                color: "#82a38f",
                fontSize: "35px",
              }}
            />
          }
        />
      </Flex>
    </Header>
  );
};

export default MainHeader;
