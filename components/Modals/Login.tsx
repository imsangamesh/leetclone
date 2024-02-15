import { authModalState } from "@/atoms/authModalAuth";
import { useSetRecoilState } from "recoil";

type Props = {};

const Login = (props: Props) => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = (type: "login" | "register" | "forgotPassword") => {
    setAuthModalState((prev) => ({ ...prev, type }));
  };

  return (
    <form className="flex flex-col gap-y-6 px-6 py-4">
      <h3 className="text-xl font-medium text-white">Sign in to LeetClone</h3>

      {/* ------------------------ EMAIL */}
      <div>
        <label
          htmlFor="email"
          className="text-sm font-medium block mb-2 text-gray-300">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@company.com"
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
          className="border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
        />
      </div>

      {/* ------------------------ LOGIN BUTTON */}
      <button
        type="submit"
        className="w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s">
        Login
      </button>

      {/* ------------------------ FORGOT PASSWORD */}
      <div className="self-end relative group">
        <a
          href="#"
          onClick={() => handleClick("forgotPassword")}
          className="text-sm text-brand-orange">
          Forgot Password?
        </a>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-brand-orange w-0 group-hover:w-full transition-[width] duration-300" />
      </div>

      {/* ------------------------ SIGNUP BUTTON */}
      <div className="text-sm font-medium text-gray-300 self-center">
        Not Registered? |{" "}
        <a
          href="#"
          onClick={() => handleClick("register")}
          className="text-blue-500 hover:underline">
          Create Account
        </a>
      </div>
    </form>
  );
};

export default Login;
