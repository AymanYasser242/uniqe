import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "./header";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import MainFooter from "./footer";
import { useEffect } from "react";
import Spinner from "./utility/spinner";
import { Content } from "antd/es/layout/layout";

const ContentContainer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="content-container max-w-[1700px] mx-auto">
      <MainHeader />
      <Content className="min-h-[50vh]">
        <Outlet />
      </Content>
      <MainFooter />
      <FloatingWhatsApp
        phoneNumber={+201080875089}
        accountName="UNIQE"
        avatar="/logo-chat.svg"
        statusMessage="Feel free to contact us any time"
      />
      <Spinner />
    </div>
  );
};
export default ContentContainer;
