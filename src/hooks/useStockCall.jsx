import { useDispatch } from "react-redux";
import { getStockSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();
  //   const { token } = useSelector((state) => state.auth);
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
      getStockData(url);
    } catch (error) {
      console.log(error);
    }
  };

  return { getStockData, deleteStockData };
};

export default useStockCall;
