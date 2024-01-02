import { Outlet } from "react-router-dom";
import MainHeader from "./header";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import MainFooter from "./footer";

const ContentContainer = () => {
  return (
    <div>
      <MainHeader />
      <Outlet />
      <MainFooter />
      <FloatingWhatsApp
        phoneNumber={+201279463663}
        accountName="UNIQE"
        avatar="logo-chat.svg"
        statusMessage="Feel free to contact us any time"
      />
    </div>
  );
};
export default ContentContainer;

