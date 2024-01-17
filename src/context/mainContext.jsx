import { createContext, useEffect, useReducer, useState } from "react";
import { PropTypes } from "prop-types";
import axios from "axios";
import { authReducer } from "./mainReducer";

export const AuthContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    loading: true,
  });

  const [refresh, setRefresh] = useState(false);
  const [backDrop, setBackDrop] = useState(false);

  const RefreshUser = () => {
    setRefresh((prevState) => !prevState);
  };

  //const devURL1 = `http://127.0.0.1:3000`;
  //const devURL2 = `https://ahmed-blasi.onrender.com`;
  //const URL = `https://ahmedblasi.com/api`;

  const URL = `http://127.0.0.1:7000`;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const getUser = async () => {
        try {
          setBackDrop(true);
          const response = await axios.get(URL + `/user/getuser`, {
            headers: {
              authorization: `Bearer ${user.loginToken}`,
            },
          });
          const data = await response.data;
          dispatch({ type: "LOGIN", payload: data.user });
          setBackDrop(false);
        } catch (err) {
          setBackDrop(false);
        }
      };
      getUser();
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, [refresh, URL]);
  console.log("user state : ", state);
  return (
    <AuthContext.Provider
      value={{ ...state, dispatch, RefreshUser, URL, backDrop, setBackDrop }}
    >
      {children}
    </AuthContext.Provider>
  );
};

MainContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
