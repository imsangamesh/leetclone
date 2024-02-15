"use client";

import { authModalState } from "@/atoms/authModalAuth";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";

type Props = {};

const AuthModal = (props: Props) => {
  const authModal = useRecoilValue(authModalState);
  const closeModal = useCloseModal();

  return (
    <>
      <div
        onClick={closeModal}
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60"></div>

      <div className="w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center">
        <div className="relative w-full h-full mx-auto flex items-center justify-center">
          <div className="bg-white rounded-lg shadow relative w-full bg-gradient-to-b from-brand-orange to-slate-900 mx-6">
            <div className="">
              <button
                onClick={closeModal}
                className="flex justify-end bg-transparent rounded-lg text-sm p-1.5 m-2 ml-auto items-center hover:bg-gray-800 hover:text-white text-white transition duration-300">
                <IoClose className="h-5 w-5" />
              </button>
            </div>

            {authModal.type === "login" ? (
              <Login />
            ) : authModal.type === "register" ? (
              <Signup />
            ) : (
              <ResetPassword />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;

function useCloseModal() {
  const setAuthModal = useSetRecoilState(authModalState);

  const closeModal = () => {
    setAuthModal((prev) => ({ ...prev, isOpen: false, type: "login" }));
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return closeModal;
}
