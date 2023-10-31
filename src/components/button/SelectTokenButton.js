import React from "react";
import ico_bottom_arrow_white from "../../assets/svg/ico_bottom_arrow_white.svg";

function SelectTokenButton({ isSelectModal, setIsSelectModal }) {
  return (
    <button
      className="absolute right-0 flex items-center px-3 py-[3px] text-white border-neutral2 hover:bg-accent1/80 bg-accent1 text-xl rounded-full shadow-[0_0_8px_0_#00000026]"
      onClick={() =>
        isSelectModal ? setIsSelectModal(false) : setIsSelectModal(true)
      }
    >
      Select token
      <img className="ml-2" src={ico_bottom_arrow_white} alt="logo" />
    </button>
  );
}

export default SelectTokenButton;
