
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useAuthCall = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {axiosPublic} = useAxios()


  const login = async (userData) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post('/account/auth/login/',userData)
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login successfull.");
      navigate("/stock");
    } catch (error) {
      toastErrorNotify(
        error?.response?.data?.non_field_errors[0] || error?.message
      );
      dispatch(fetchFail());
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      const { message } = await axiosPublic.post('/account/auth/logout/');
      dispatch(logoutSuccess());
      toastSuccessNotify(message);
      navigate("/");
    } catch (error) {
      toastErrorNotify(
        error?.response?.data?.non_field_errors[0] || error?.message
      );
      dispatch(fetchFail());
    }
  };

  const register = async (userData) => {

    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post('/account/register/',userData)
      dispatch(registerSuccess(data));
      toastSuccessNotify("register islemi basarili");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error?.message);
      console.log(error);
    }
  };

  return { login, logout, register };
};

export default useAuthCall;
