import React, { useState } from "react";
import ico_setting from "../../assets/svg/ico_setting.svg";
import SwapCoinSelectButton from "../../components/button/SwapCoinSelectButton";
import SelectTokenButton from "../../components/button/SelectTokenButton";
import ico_bottom_arrow_long from "../../assets/svg/ico_bottom_arrow_long.svg";
import ConnectModal from "../../components/modal/ConnectModal";
import SelectTokenModal from "../../components/modal/SelectTokenModal";

export default function Swap() {
  const swapBoxList = [{ title: "You pay" }, { title: "You receive" }];
  // Connect 버튼 모달창
  const [isConnect, setIsConnect] = useState(false);
  // switch 버튼 state
  const [isButtonSwitch, setIsButtonSwitch] = useState(false);
  // select token 모달창
  const [isSelectModal, setIsSelectModal] = useState(false);

  return (
    <>
      <div className="m-auto mt-[68px] w-[460px] text-neutral1">
        <div className="bg-white px-2 pt-[12px] pb-2 border-[1px] border-surface3 shadow-[0_5px_60px_10px_#ffefff] rounded-3xl">
          <div className="mb-[10px] flex items-center justify-between">
            <h1 className="px-3 text-base ">
              Swap
              <span
                className="cursor-pointer pl-3 text-neutral2"
                onClick={() =>
                  isConnect ? setIsConnect(false) : setIsConnect(true)
                }
              >
                Buy
              </span>
            </h1>
            <img
              className="py-[6px] px-3 cursor-pointer hover:opacity-80"
              src={ico_setting}
              alt="ico"
            />
          </div>
          <div className="relative ">
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-10 w-10 border-[4px] border-white bg-surface2 cursor-pointer flex items-center justify-center rounded-xl"
              onClick={() =>
                isButtonSwitch
                  ? setIsButtonSwitch(false)
                  : setIsButtonSwitch(true)
              }
            >
              <img src={ico_bottom_arrow_long} alt="ico" />
            </div>
            {swapBoxList.map((item, idx) => {
              return (
                <SwapBox
                  title={item.title}
                  key={idx}
                  index={idx}
                  isButtonSwitch={isButtonSwitch}
                  isSelectModal={isSelectModal}
                  setIsSelectModal={setIsSelectModal}
                />
              );
            })}
          </div>
          <button className="group ease-in duration-150 w-full text-accent1 bg-accent2 rounded-2xl py-4 text-xl font-semibold hover:bg-accent2 filter hover:brightness-90">
            Connect wallet
          </button>
        </div>
        <div className="flex items-center justify-center mt-4">
          <span className="text-[11px] opacity-60 cursor-pointer hover:opacity-100">
            Uniswap available in: <span className="text-accent1">한국어</span>
          </span>
        </div>
      </div>
      {/* ConnectModal */}
      {isConnect && (
        <ConnectModal
          isConnect={isConnect}
          onClose={() => {
            setIsConnect(false);
          }}
        />
      )}
      {/* SelectModal */}
      {isSelectModal && (
        <SelectTokenModal
          isSelectModal={isSelectModal}
          setIsSelectModal={setIsSelectModal}
          onClose={() => {
            setIsSelectModal(false);
          }}
        />
      )}
    </>
  );
}

export function SwapBox({
  title,
  index,
  isButtonSwitch,
  isSelectModal,
  setIsSelectModal,
}) {
  const [payNum, setPayNum] = useState("");

  const payNumHandler = (e) => {
    const input = e.target.value;

    const regex = /^[0-9]*[.,]?[0-9]*$/;

    if (regex.test(input) && input.length >= 1 && input.length <= 79) {
      setPayNum(input);
    } else {
      // 에러처리
    }
  };

  const buttonProps = {
    isSelectModal: isSelectModal,
    setIsSelectModal: setIsSelectModal,
  };

  const ButtonComponent = isButtonSwitch
    ? index === 0
      ? SelectTokenButton
      : SwapCoinSelectButton
    : index === 0
    ? SwapCoinSelectButton
    : SelectTokenButton;

  return (
    <div className="p-4 mb-1 h-[120px] bg-surface2 rounded-2xl">
      <h3 className="text-neutral2 text-sm mb-[2px]">{title}</h3>
      <div className="flex items-center relative">
        <input
          type="text"
          className="text-4xl bg-surface2 focus:outline-none placeholder:text-neutral3"
          autoComplete="off"
          autoCorrect="off"
          placeholder="0"
          value={payNum}
          onChange={payNumHandler}
        />
        <ButtonComponent {...buttonProps} />
      </div>
      {/* <span className="text-neutral2">$1234</span> */}
    </div>
  );
}
