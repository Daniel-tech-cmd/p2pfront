"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { ToastContainer, toast } from "react-toastify";
import { openseccon } from "../contexts/openseccontext";
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
const useSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const [verify, setverify] = useState(null);
  const { togglesucces, togglealert } = useContext(openseccon);
  const { dispatch, user } = useAuthContext();
  const router = useRouter();
  const signup = async (data) => {
    setIsLoading(true);
    setError(null);
    setResponseData(null);
    setverify(null);
    // console.log(process.env.NEXT_PUBLIC_URL);
    try {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_URL}/api/user/signup`,
          data
        );

        if (error?.response?.data.error) {
          setIsLoading(false);

          setError(error.response.data.error);
        }

        if (response.status === 201) {
          setIsLoading(false);
          setverify(true);
          router.push("/verify");
        }
        if (response.status === 200) {
          try {
            setResponseData(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            dispatch({
              type: "LOGIN",
              payload: response.data,
            });
            Cookies.set("user", JSON.stringify(response.data));
            setIsLoading(false);
            togglesucces();
            // router.push(`/account/${response?.data?._id}`);
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        if (error?.message) {
          if (error.message.includes("ENOTFOUND")) {
            setError("Network error");
          } else {
            setError(error.message);
          }
        }
        if (error?.response?.data.error) {
          if (error.response?.data.error.includes("ENOTFOUND")) {
            setError("Network error");
          } else {
            setError(error.response.data.error);
          }
        }
      }
    } catch (error) {
      if (error?.message) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (data) => {
    setIsLoading(true);
    setError(null);
    setResponseData(null);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/user/login`,
        data
      );

      if (response.status === 200) {
        setResponseData(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        dispatch({
          type: "LOGIN",
          payload: response.data,
        });
        Cookies.set("user", JSON.stringify(response.data));
        setIsLoading(false);
        toast.success("Login successful!");
        router.push(`/account/dashboard/${response?.data._id}`);
      }
      if (response.status === 201) {
        setIsLoading(false);
        setverify(true);
        router.push("/verify");
      }
    } catch (error) {
      if (error?.message) {
        if (error.message.includes("ENOTFOUND")) {
          setError("Network error");
        } else {
          setError(error.message);
        }
      }
      if (error?.response?.data.error) {
        if (error.response?.data.error.includes("ENOTFOUND")) {
          setError("Network error");
        } else {
          setError(error.response.data.error);
        }
      }

      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    Cookies.remove("user");
    router.push("/user/login");
  };

  return { isLoading, error, responseData, signup, login, logout, verify };
};

export default useSignup;
