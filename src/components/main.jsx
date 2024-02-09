import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import "./styles/App.css";
import { ConfigProvider } from "antd";
import "swiper/css/bundle";
import { MainContextProvider } from "../context/mainContext.jsx";

const theme = {
  token: {
    colorPrimary: "#688272",
  },
  components: {
    Layout: {
      headerBg: "#fff",
    },
    Menu: {
      colorPrimary: "#688272",
      darkItemBg: "#262626",
    },
    Button: {
      primaryShadow: "0 2px 0 rgba(2, 100, 64, 0.1)",
    },
    Spin: {
      dotSizeLG: 45
    }
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </ConfigProvider>
  </React.StrictMode>
);
