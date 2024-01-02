import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { Flex, Image, Menu, Drawer, Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

const MainHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Header className="main-header">
      <Flex justify="space-between" align="center" component="nav">
        <Link to="/">
          <Image src="logo.svg" className="header-logo" preview={false} />
        </Link>
        <Flex className="header-links" gap={30}>
          {/* <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Contact</a> */}
        </Flex>
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          open={drawerOpen}
        >
          <Menu mode="vertical">
            <Menu.Item key="home" icon={<AppstoreOutlined />}>
              Home
            </Menu.Item>
            <SubMenu key="services" icon={<BarsOutlined />} title="Services">
              <Menu.Item key="service1">Service 1</Menu.Item>
              <Menu.Item key="service2">Service 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="contact" icon={<MailOutlined />}>
              Contact
            </Menu.Item>
          </Menu>
        </Drawer>

        {/* Hamburger Menu Button for Mobile */}
        <Button
          type="text"
          onClick={
            {
              /*showDrawer*/
            }
          }
          icon={
            <BarsOutlined
              style={{
                color: "#688272",
                fontSize: "30px",
              }}
            />
          }
        />
      </Flex>
    </Header>
  );
};

export default MainHeader;
