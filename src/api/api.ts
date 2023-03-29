import {AxiosError} from "axios";

export const handleErrors = <T>(error: AxiosError<T>) => {
  if (!error.response) {
    throw error;
  }

  return error.response?.data || "An error occurred";
};