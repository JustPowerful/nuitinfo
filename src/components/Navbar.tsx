import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed z-50 top-0 left-0 w-full flex justify-around items-center py-2 bg-[#FFF8ED] shadow-sm shadow-orange-950 font-poppins">
      <div>
        <img src="/images/logo.svg" className="w-[53px] h-[53px]" />
      </div>
      <div className="flex gap-8">
        <Link to="/home">Home</Link>
        <Link to="/forum">Forum</Link>
        <Link to="/quiz">Quiz</Link>
      </div>
      <Link
        to="/signup"
        className="bg-orange-400 text-white px-5 py-2 rounded-3xl border border-black "
      >
        Join Us
      </Link>
    </div>
  );
}
