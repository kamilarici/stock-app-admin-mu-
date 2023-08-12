/* import { useDispatch } from "react-redux";
import { fetchStart } from "../features/authSlice";
import axios from "axios";

export const login = async(userData) => {

    const dispatch = useDispatch()
    const BASE_URL = "http://11510.fullstack.clarusway.com";


dispatch(fetchStart())
try {
    const{ data} = await axios.post(`${BASE_URL}/account/auth/login/`, userData )
    console.log(data);
} catch (error) {
    console.log(error);
}

};

 */

import axios from "axios";
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

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (userData) => {
    // const BASE_URL = "http://14108.fullstack.clarusway.com";
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/auth/login/`,
        userData
      );
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
    // const BASE_URL = "http://14108.fullstack.clarusway.com";
    dispatch(fetchStart());
    try {
      const { message } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/auth/logout/`
      );
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
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/register/`,
        userData
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("register başarili");
      navigate("/stock");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.non_field_errors[0] || error?.message
      );
    }
  };

  return { login, logout, register };
};

export default useAuthCall;
