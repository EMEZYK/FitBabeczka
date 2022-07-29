import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

export const Logout = () => {
  const [, removeCookie] = useCookies();

  let navigate = useNavigate();

  const logOut = () => {
    try {
      removeCookie("token");
      navigate("/user/login");
    } catch {
      return toast.error("Something went wrong, you can't logout");
    }
  };

  useEffect(() => {
    logOut();
  }, []);

  return (
    <>
      <ToastContainer />
    </>
  );
};
