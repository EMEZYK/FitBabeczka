import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export const Logout = () => {
  const [, removeCookie] = useCookies();

  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await removeCookie("token");
      navigate("/user/login");
    } catch {
      return toast.error("Something went wrong, you can't logout");
    }
  };
  logOut();
  return (
    <>
      <ToastContainer />
    </>
  );
};
