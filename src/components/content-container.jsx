import { Outlet, useLocation } from "react-router-dom";
import MainHeader from "./header";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import MainFooter from "./footer";
import { useEffect } from "react";

const ContentContainer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div>
      <MainHeader />
      <Outlet />
      <MainFooter />
      <FloatingWhatsApp
        phoneNumber={+201080875089}
        accountName="UNIQE"
        avatar="/logo-chat.svg"
        statusMessage="Feel free to contact us any time"
      />
    </div>
  );
};
export default ContentContainer;
