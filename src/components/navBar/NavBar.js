import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/svg/logo_uniswap.svg";
import ico_dot from "../../assets/svg/ico_dot.svg";
// import ico_dot_active from "../../assets/svg/ico_dot_active.svg";
import NavCoinSelectButton from "../button/NavCoinSelectButton";
import ico_search from "../../assets/svg/ico_search.svg";
import ConnectModal from "../modal/ConnectModal";

export default function NavBar() {
  const navList = [
    { name: "Swap" },
    { name: "Tokens" },
    { name: "NFTs" },
    { name: "Pools" },
  ];

  // 네비게이션 state
  const [activeNav, setActiveNav] = useState(0); // eslint-disable-line no-unused-vars
  // coin 아이콘 버튼 클릭 state
  const [isActiveIco, setIsActiveIco] = useState(false);
  // coin 아이콘 상태 state
  const [nowIco, setNowIco] = useState("Ethereum");
  // Connect 버튼 모달창
  const [isConnect, setIsConnect] = useState(false);

  // coin 아이콘 버튼 클릭 핸들러
  const buttonHadler = () => {
    if (isActiveIco) {
      setIsActiveIco(false);
    } else {
      setIsActiveIco(true);
    }
  };

  return (
    <>
      <nav className="px-3 py-5">
        <div className="flex items-center justify-between  h-8">
          <div className="flex items-center justify-start w-[400px]">
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 cursor-pointer mr-3"
            />
            <ul className="flex">
              {navList.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={`${
                      activeNav === idx ? "text-neutral1" : "text-neutral2"
                    } py-2 px-[14px] cursor-pointer hover:bg-surface2 hover:rounded-xl`}
                  >
                    {item.name}
                  </li>
                );
              })}
              <li className="py-2 px-[14px] cursor-pointer hover:bg-surface2 hover:rounded-xl">
                <img src={ico_dot} alt="dot" />
              </li>
            </ul>
          </div>
          <div>
            <SearchBar />
          </div>
          <div className="flex items-center justify-end gap-3 w-[400px]">
            <NavCoinSelectButton
              nowIco={nowIco}
              setNowIco={setNowIco}
              isActiveIco={isActiveIco}
              setIsActiveIco={setIsActiveIco}
              buttonHadler={buttonHadler}
            />
            <button
              className="bg-accent2 text-accent1 px-3 py-[10px] rounded-full font-semibold hover:bg-accent1/20"
              onClick={() =>
                isConnect ? setIsConnect(false) : setIsConnect(true)
              }
            >
              Connect
            </button>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      {/* ConnectModal */}
      {isConnect && (
        <ConnectModal
          isConnect={isConnect}
          onClose={() => {
            setIsConnect(false);
          }}
        />
      )}
    </>
  );
}

export function SearchBar() {
  return (
    <div className="flex gap-3 items-center group screens_lg:w-[460px] screens_md:w-[330px] screens_sm:w-[360px] border-[1px]  border-surface3 py-2 px-3 rounded-2xl transition-colors duration-300 hover:border-accent1">
      <img src={ico_search} alt="ico" />
      <input
        type="text"
        className="w-full focus:outline-none"
        placeholder="Search tokens and NFT collections"
      />
      <div className="h-5 w-5 text-neutral3 bg-surface3 text-xs leading-5 text-center rounded px-2">
        /
      </div>
    </div>
  );
}
