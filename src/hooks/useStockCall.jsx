import { useDispatch } from "react-redux";
import { getFirmsSucces } from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();
  //   const { token } = useSelector((state) => state.auth);
  const getStockData = async (url) => {
    try {
      const { data } = await axiosWithToken(`/stock/${url}/`);
      dispatch(getFirmsSucces({ url, data }));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getStockData };
};

export default useStockCall;
