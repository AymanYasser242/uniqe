import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { ConfigProvider } from "antd";
import "swiper/css/bundle";


const theme = {
  token: {
    colorPrimary: "#688272",
    
  },
  components: {
    Layout: {
      headerBg : "#262626",
      
    },
    Menu: {
      colorPrimary: "#688272",
      darkItemBg : "#262626",
    },
    Button: {
      primaryShadow	 : "0 2px 0 rgba(2, 100, 64, 0.1)"
    },

  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
