import { useState } from "react";
//import { LoginOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Flex, Image, Menu, Drawer, Button, Divider, Badge } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
//import { useMainContext } from "../hooks/useMainContext";

const MainHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  // const { user } = useMainContext();
  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Header className="main-header h-auto px-4 py-2 md:px-8  md:py-3 shadow-sm">
      <Flex justify="space-between" align="center" component="nav">
        <Link to="/">
          <Image
            src="/logo-header.svg"
            className="header-logo"
            preview={false}
          />
        </Link>

        <Flex align="center" justify="center" gap={10}>
          <Badge count={4} className="hidden">
            <Link to="/cart">
              <Icon
                icon="ion:cart-outline"
                width={28}
                color="#688272"
                className="[&>path]:hover:fill-primary transition-all"
              />
            </Link>
          </Badge>
          <Divider
            type="vertical"
            className=" hidden bg-gray-400 inset-0 h-6 rounded-full"
          />
          <div
            //className="hidden md:flex justify-center items-center gap-x-2"
            className="hidden"
          >
            <Link
              className=" bg-primary text-white text-base  px-5 py-3 leading-4 h-auto rounded-full hover:text-primary hover:bg-transparent border-2 border-solid border-primary  transition-all"
              to="/signup"
            >
              Sign Up
            </Link>
            <Link
              className="font-[500] text-primary text-base rounded-full px-5 py-3 mr-2 leading-4 h-auto hover:bg-primary hover:text-white transition-all"
              to="login"
            >
              Log In
            </Link>
          </div>
          <Button
            type="text"
            onClick={showDrawer}
            icon={
              <Icon
                icon="heroicons:bars-3-bottom-left-20-solid"
                width={35}
                color="#688272"
              />
            }
            style={{
              width: 40,
              height: 40,
            }}
          />
        </Flex>
      </Flex>
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        open={drawerOpen}
        width={300}
        className="main-drawer"
      >
        <Menu mode="vertical">
          <Menu.Item key="home" icon={<Icon icon="iconamoon:home" />}>
            <NavLink to="/" className="text-lg">
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item
            key="shop"
            icon={<Icon icon="ant-design:product-outlined" />}
          >
            <NavLink to="/shop" className="text-lg">
              Shop
            </NavLink>
          </Menu.Item>
          <Menu.Item key="contact" icon={<Icon icon="grommet-icons:contact" />}>
            <NavLink to="/contact" className="text-lg">
              Contact
            </NavLink>
          </Menu.Item>
          {/*
              <Menu.Item
                key="profile"
                icon={<Icon icon="gg:profile" />}
              >
                <NavLink to="" className="text-lg">Profile</NavLink>
              </Menu.Item>
            
            <Menu.Item key="signup" icon={<UsergroupAddOutlined />}>
              <NavLink to="/signup">Signup</NavLink>
            </Menu.Item>
            <Menu.Item key="login" icon={<LoginOutlined />}>
              <NavLink to="/login">Login</NavLink>
            </Menu.Item> */}
        </Menu>
      </Drawer>
    </Header>
  );
};

export default MainHeader;
