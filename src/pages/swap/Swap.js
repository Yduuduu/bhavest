import React from "react";
import ico_setting from "../../assets/svg/ico_setting.svg";

export default function Swap() {
  return (
    <div className="text-neutral1 bg-white px-2 pt-[12px] pb-2 border-[1px] border-surface3 w-[480px] m-auto mt-[68px] shadow-[0_5px_40px_20px_#ffefff] rounded-3xl">
      <div className="mb-[10px] flex items-center justify-between">
        <h1 className="px-3 text-base ">
          Swap <span className="cursor-pointer pl-3 text-neutral2">Buy</span>
        </h1>
        <img
          className="py-[6px] px-3 cursor-pointer hover:opacity-80"
          src={ico_setting}
          alt="ico"
        />
      </div>
      <div className="p-4 h-[120px] bg-surface2 rounded-2xl">
        <h3>You pay</h3>
        <input type="number" />
      </div>
      <div>
        <h3>You receive</h3>
        <input type="number" />
      </div>
      <button className="group ease-in duration-150 w-full text-accent1 bg-accent2 rounded-2xl py-4 text-xl font-semibold hover:bg-accent2 filter hover:brightness-90">
        Connect wallet
      </button>
    </div>
  );
}
