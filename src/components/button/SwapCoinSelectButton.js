import React from "react";
import logo_ETH from "../../assets/images/logo_ETH.png";
import logo_USDC from "../../assets/images/logo_USDC.png";
import logo_WBTC from "../../assets/images/logo_WBTC.png";
import ico_bottom_arrow from "../../assets/svg/ico_bottom_arrow.svg";

export const coinList = [
  { name: "ETH", img: logo_ETH },
  { name: "USDC", img: logo_USDC },
  { name: "WBTC", img: logo_WBTC },
];

export default function SwapCoinSelectButton({
  isSelectModal,
  setIsSelectModal,
}) {
  return (
    <button
      className="absolute right-0 flex items-center pl-1 pr-2 border-neutral2 hover:bg-surface3 bg-white text-xl rounded-full shadow-[0_0_8px_0_#00000026]"
      onClick={() =>
        isSelectModal ? setIsSelectModal(false) : setIsSelectModal(true)
      }
    >
      <div className="flex items-center justify-center">
        <img className="w-6 h-6" src={logo_ETH} alt="logo" />
        <span className="inline-block m-[2px] px-1 font-semibold tracking-wider">
          ETH
        </span>
        <img className="mr-1" src={ico_bottom_arrow} alt="logo" />
      </div>
    </button>
  );
}
