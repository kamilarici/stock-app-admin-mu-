import { useDispatch } from "react-redux";
import { getStockSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getStockData = async (url) => {
    try {
      const { data } = await axiosWithToken(`/stock/${url}/`);
      dispatch(getStockSuccess({ url, data }));
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
      toastSuccessNotify(`${url} can not be  deleted!`);
      console.log(error);
    }
  };

  const createStockData = async (url, info) => {
    try {
      await axiosWithToken.post(`/stock/${url}/`, info);
      getStockData(url)
      toastSuccessNotify(`${url} succecfuly added.`);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be  added!`);

    }
  };

  const updateStockData = async (url,id, info) => {
    try {
      await axiosWithToken.put(`/stock/${url}/${id}/`, info);
      getStockData(url)
      toastSuccessNotify(`${url} succecfuly edited.`);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be  edited!`);

    }
  };

  return { getStockData, deleteStockData, createStockData, updateStockData };
};

export default useStockCall;
