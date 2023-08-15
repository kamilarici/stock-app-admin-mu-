import { useDispatch } from "react-redux";
import { getStockSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

const useStockCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getStockData = async (url) => {
    try {
      const { data } = await axiosWithToken(`/stock/${url}/`);
      dispatch(getStockSuccess({ url, data }));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`/stock/${url}/${id}/`);
      toastSuccessNotify(`${url} succecfuly deleted.`);
      getStockData(url);
    } catch (error) {
      console.log(error);
    }
  };

  const createStockData = async (url, info) => {
    try {
      await axiosWithToken.post(`/stock/${url}/`, info);
      toastSuccessNotify(`${url} succecfuly added`);

      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can nat be added`);
    }
  };

  return { getStockData, deleteStockData, createStockData };
};

export default useStockCall;
