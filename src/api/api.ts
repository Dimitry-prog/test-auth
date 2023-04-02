import {toast} from "react-toastify";
import {AxiosError} from "axios";
import {AxiosKnownError} from "../types";

export const handleRequest = async (requestFunc: Function, reject: Function, toastMsg: string) => {
  try {
    const { data } = await requestFunc();
    if (toastMsg) {
      toast(toastMsg);
    }
    return data;
  } catch (e) {
    const error = e as AxiosError<AxiosKnownError>;
    const errorMessage = error.response?.data?.message || String(error);
    toast(errorMessage);
    return reject(errorMessage);
  }
};