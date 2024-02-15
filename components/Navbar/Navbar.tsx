"use client";

import { authModalState } from "@/atoms/authModalAuth";
import Link from "next/link";
import { useSetRecoilState } from "recoil";

type Props = {};

function Navbar({}: Props) {
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleClick = () => {
    setAuthModalState((prev) => ({ ...prev, isOpen: true }));
  };

  return (
    <div className="flex w-full items-center justify-between px-2 sm:px-12 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        <img src="/logo.png" alt="LeetClone" className="h-full" />
      </Link>

      <div className="flex items-center">
        <button
          onClick={handleClick}
          className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white border-2 hover:border-brand-orange border-transparent transition duration-300">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Navbar;
