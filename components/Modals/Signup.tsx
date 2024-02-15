import { authModalState } from "@/atoms/authModalAuth";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

type Props = {};

const Signup = (props: Props) => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [inputs, setInputs] = useState({
    email: "",
    displayName: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, type: "login" }));
  };

  return (
    <form className="flex flex-col gap-y-6 px-6 py-4">
      <h3 className="text-xl font-medium text-white">Register to LeetClone</h3>

      {/* ------------------------ EMAIL */}
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          onClick={() => handleInputChange()}
          placeholder="name@company.com"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
        />
      </div>

      {/* ------------------------ DISPLAY NAME */}
      <div>
        <label
          htmlFor="displayName"
          className="text-sm font-medium block mb-2 text-gray-300">
          Display Name
        </label>
        <input
          type="displayName"
          name="displayName"
          id="displayName"
          onClick={() => handleInputChange()}
          placeholder="John Doe"
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
        />
      </div>

      {/* ------------------------ PASSWORD */}
      <div>
        <label
          htmlFor="password"
          className="text-sm font-medium block mb-2 text-gray-300">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onClick={() => handleInputChange()}
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
        />
      </div>

      {/* ------------------------ SIGNUP BUTTON */}
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s">
        Register
      </button>

      {/* ------------------------ LOGIN BUTTON */}
      <div
        onClick={() => handleClick()}
        className="text-sm font-medium text-gray-300 self-center">
        Already have an account? |{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Login
        </a>
      </div>
    </form>
  );
};

export default Signup;
