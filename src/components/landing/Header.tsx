import React from "react";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col justify-center p-5 bg-[#FFF8ED]">
      <div className="grid grid-cols-[60fr_40fr] items-center">
        <div className="p-12">
          <h1 className="font-montasar font-bold text-4xl">CHECK YOUR FACTS</h1>
          <h1 className="font-montasar font-bold text-4xl mb-5">
            FACT YOUR CHECKS
          </h1>
          <p className="font-poppins text-xl w-96">
            Démystifions les idées reçues, interrogeons la Terre : Éclairons le
            débat sur le changement climatique !
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src="/images/earth.png" className="scale-75" />
        </div>
      </div>
      <div className="font-poppins grid grid-cols-[60fr_20fr] gap-5 px-16">
        <div className="relative">
          <Search className="absolute top-2.5 left-3 text-green-950" />
          <input
            className="py-2 px-10 border-2  border-black w-full rounded-3xl"
            placeholder="Ask your question"
          ></input>
        </div>
        <button className="bg-orange-400 text-white rounded-md border-2 border-black">
          Prompt
        </button>
      </div>
    </div>
  );
}
