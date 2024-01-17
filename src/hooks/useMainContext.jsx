import { AuthContext } from "../context/mainContext";
import { useContext } from "react";

export const useMainContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
};
