import React, { useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ico_search from "../../assets/svg/ico_search.svg";
import ico_x from "../../assets/svg/ico_x.svg";
import logo_ETH from "../../assets/images/logo_ETH.png";
import logo_USDC from "../../assets/images/logo_USDC.png";
import logo_WBTC from "../../assets/images/logo_WBTC.png";

export const coinList = [
  { titie: "Ether", name: "ETH", img: logo_ETH },
  { titie: "Wrapped Ether", name: "USDC", img: logo_USDC },
  { titie: "USDCoin", name: "WBTC", img: logo_WBTC },
];

export default function SelectTokenModal({
  isSelectModal,
  setIsSelectModal,
  onClose,
}) {
  const outside = useRef();
  // 모달창 밖 클릭 시 닫기
  const handleModalClose = (e) => {
    if (isSelectModal && outside.current === e.target) {
      setIsSelectModal(false);
    }
  };

  return ReactDOM.createPortal(
    <>
      <OverLay>
        <OutLine ref={outside} onClick={(e) => handleModalClose(e)}>
          <Wrap>
            <SelectSearchCoin onClose={onClose} />
            <SelectCoinList />
          </Wrap>
        </OutLine>
      </OverLay>
    </>,
    document.getElementById("modal")
  );
}
const OverLay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999999;
`;

const OutLine = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding-bottom: env(safe-area-inset-bottom);
`;

const Wrap = styled.div`
  position: relative;
  background: white;
  width: 480px;
  border-radius: 20px;
  overflow: hidden;
`;

export function SelectSearchCoin({ onClose }) {
  return (
    <div className="grid gap-y-4 border-b-surface3 border-surface3 border-b-[1px] p-5">
      <div className="flex items-center justify-between">
        <h1 className="text-base">Select a token</h1>
        <img
          src={ico_x}
          alt="ico"
          className="cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="flex gap-3 items-center group w-full border-[1px] bg-surface2 border-surface3 py-2 px-3 rounded-xl  ">
        <img src={ico_search} alt="ico" />
        <input
          type="text"
          className="w-full focus:outline-none bg-surface2"
          placeholder="Search name or paste address"
        />
      </div>
      <div>
        {coinList.map((item, idx) => {
          return (
            <button
              key={idx}
              className="pl-1 pr-2 py-[1px] border-[1px] border-surface3 hover:bg-surface3 bg-white text-base rounded-full mr-2"
            >
              <div className="flex items-center">
                <img className="w-6 h-6" src={item.img} alt="logo" />
                <span className="inline-block m-[2px] px-1">{item.name}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function SelectCoinList() {
  return (
    <div className="pb-5 ">
      {coinList.map((item, idx) => {
        return (
          <div
            key={idx}
            className="px-5 py-2 flex items-center hover:bg-surface3 cursor-pointer"
          >
            <img src={item.img} alt="logo" className="w-9 h-9 mr-4" />
            <div>
              <h3>{item.titie}</h3>
              <h4 className="text-xs">{item.name}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
