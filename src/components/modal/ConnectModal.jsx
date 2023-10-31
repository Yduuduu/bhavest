import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ico_setting from "../../assets/svg/ico_setting.svg";
import ico_uniswapwallet from "../../assets/images/ico_uniswapwallet.png";
import ico_metamask from "../../assets/svg/ico_metamask.svg";
import ico_walletconnect from "../../assets/svg/ico_walletconnect.svg";
import ico_coinbase from "../../assets/svg/ico_coinbase.svg";
import ico_double_arrow from "../../assets/svg/ico_double_arrow.svg";

export const buttonList = [
  { text: "Uniswap Wallet", img: ico_uniswapwallet },
  { text: "Install MetaMask", img: ico_metamask },
  { text: "WalletConnect", img: ico_walletconnect },
  { text: "Coinbase Wallet", img: ico_coinbase },
];

export default function ConnectModal({ isConnect, onClose }) {
  const closeHandler = () => {
    onClose();
  };
  return ReactDOM.createPortal(
    <>
      <OverLay>
        <OutLine>
          <Wrap>
            <div
              className="hover:translate-x-5 duration-300 cursor-pointer h-full m-2 py-6 pr-5 pl-7 hover:bg-surface2/[.5] hover:opacity-75 rounded-l-lg"
              onClick={closeHandler}
            >
              <img src={ico_double_arrow} alt="ico" />
            </div>
            <div className="w-[320px] rounded-xl m-2 p-[14px_16px_16px] bg-white border-surface2 border-[1px] shadow-[0_0_10px_0_#f5f5f5] z-10">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-base">Connect a wallet</h1>
                <img
                  className="cursor-pointer hover:bg-surface3 p-1 rounded-xl"
                  src={ico_setting}
                  alt="ico"
                />
              </div>
              <div className="grid gap-y-4">
                <div className="grid gap-[2px] rounded-xl overflow-hidden">
                  <ConnectItem />
                </div>
                <div className="text-sm text-neutral2 px-1 leading-6">
                  By connecting a wallet, you agree to
                  <br /> Uniswap Labs'{" "}
                  <a href="/" className="hover:opacity-70">
                    Terms of Service
                  </a>{" "}
                  and
                  <br /> consent to its{" "}
                  <a href="/" className="hover:opacity-70">
                    Privacy Policy.
                  </a>{" "}
                  <span className="text-neutral3">(Last updated 6.7.23)</span>
                </div>
              </div>
            </div>
          </Wrap>
        </OutLine>
      </OverLay>
    </>,
    document.getElementById("modal")
  );
}
const OverLay = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1030;
`;

const OutLine = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding-bottom: env(safe-area-inset-bottom);
`;

const Wrap = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  height: calc(100% - 16px);
  overflow: hidden;
  right: 8px;
  top: 8px;
  z-index: 1000;
`;

export function ConnectItem() {
  return (
    <>
      {buttonList.map((item, idx) => {
        return (
          <button
            className="bg-surface2 flex items-center p-[18px] w-full hover:bg-surface5"
            key={idx}
          >
            <img
              className="h-10 w-10 rounded-xl border-[1px] border-surface3"
              src={item.img}
              alt="logo"
            />
            <span className="px-2">{item.text}</span>
          </button>
        );
      })}
    </>
  );
}
