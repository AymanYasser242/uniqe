import { createContext, useEffect, useReducer, useState } from "react";
import { PropTypes } from "prop-types";
import axios from "axios";
import { authReducer } from "./mainReducer";
import { URL } from "../utilites/globalVariables";


export const AuthContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    loading: true,
  });

  const [refresh, setRefresh] = useState(false);
  const [spin, setSpin] = useState(false);


  const RefreshUser = () => {
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const getUser = async () => {
        try {
          setSpin(true);
          const response = await axios.get(URL + `/user`, {
            headers: {
              authorization: `Bearer ${user.loginToken}`,
            },
          });
          const data = await response.data;
          setSpin(false);
          dispatch({ type: "LOGIN", payload: data.user });

        } catch (err) {
          setSpin(false);
          console.log(err);
          
        }
      };
      getUser();
    } else {
      dispatch({ type: "LOGOUT" });
    }
  }, [refresh]);
  console.log("user state : ", state);
  return (
    <AuthContext.Provider
      value={{ ...state, dispatch, RefreshUser, URL, spin, setSpin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

MainContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
