import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMainContext } from "./useMainContext";

export const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { URL, dispatch } = useMainContext();
  const navigate = useNavigate();

  /*-----------------------------------------------------------------------------------------------------*/
  const signup = async (formData) => {
    try {
      setIsLoading(true);
      const response = await axios.post(URL + `/user/createuser`, formData);
      const data = await response.data;
      console.log(data);
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

        // navigate("/cart");
      }
    } catch (error) {
      setIsLoading(false);
    }
  };
  return {
    signup,
    isLoading,
  };
};
