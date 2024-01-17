import { useState } from "react";
import { useMainContext } from "./useMainContext";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { URL, dispatch } = useMainContext();
  const navigate = useNavigate();

  const login = async (formData) => {
    try {
      setIsLoading(true);
      const response = await axios.post(URL + `/user/login`, formData);
      const data = await response.data;

      if (data.user) {
        setIsLoading(false);
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: data.user.email,
            userName: data.user.userName,
            loginToken: data.user.loginToken,
          })
        );
        dispatch({ type: "LOGIN", payload: data.user });

        // navigate("/student/my-details");
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
  };
};
