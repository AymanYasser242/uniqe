import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";
import { toast } from "react-toastify";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const  navigate  = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    toast.success('تم تسجيل خروجك بنجاح');
    navigate("/");
  };
  return { logout };
};
