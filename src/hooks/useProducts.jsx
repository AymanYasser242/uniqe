import axios from "axios";
import { useMainContext } from "./useMainContext";


export const useProducts = () => {
  const { URL, setSpin } = useMainContext();

  const getProduct = async (id) => {
    try {
      setSpin(true);
      const response = await axios.get(URL + `/product/${id}`);
      setSpin(false);
      return response.data;
    } catch (err) {
      setSpin(false);
      console.log(err)
    }

  }

  const getAllProducts = async () => {
    try {
      setSpin(true);
      const response = await axios.get(URL + `/product`);
      setSpin(false);
      return response.data;
    } catch (err) {
      setSpin(false);
      console.log(err)
    }

  }


  return {
    getProduct,
    getAllProducts
  };
};
