import axios from "axios";
import { useMainContext } from "./useMainContext";


export const useProducts = () => {
  const { URL, setSpin } = useMainContext();

  const getProduct = async (params) => {
    try {
      setSpin(true);
      const slug = params.slug;
      const response = await axios.get(URL + `getproduct/?slug=${slug}`);
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
      const response = await axios.get(URL + `getallproducts`);
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
