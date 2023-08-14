import axios from "axios";
import { useSelector } from "react-redux";

const useStockCall = () => {
  const { token } = useSelector((state) => state.auth);
  const getFirms = async () => {
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}/stock/firms`,
        { headers: { Authorization: `Token ${token}` } }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getFirms };
};

export default useStockCall;
