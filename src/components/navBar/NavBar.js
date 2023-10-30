import React, { useState } from "react";
import logo from "../../assets/images/uniswap_logo.svg";
import dot from "../../assets/svg/dot.svg";
import dot_active from "../../assets/svg/dot_active.svg";
import NavCoinSelectButton from "../button/NavCoinSelectButton";
import ico_search from "../../assets/svg/ico_search.svg";
import { Outlet } from "react-router-dom";

export default function NavBar() {
  const navList = [
    { name: "Swap" },
    { name: "Tokens" },
    { name: "NFTs" },
    { name: "Pools" },
  ];

  const [activeNav, setActiveNav] = useState(0);
  const [isActiveIco, setIsActiveIco] = useState(false);
  const [nowIco, setNowIco] = useState("Ethereum");

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
        <div className="flex items-center justify-center">
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
              <img src={dot} alt="dot" />
            </li>
          </ul>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="flex items-center gap-3">
          <NavCoinSelectButton
            nowIco={nowIco}
            setNowIco={setNowIco}
            isActiveIco={isActiveIco}
            setIsActiveIco={setIsActiveIco}
            buttonHadler={buttonHadler}
          />
          <button className="bg-accent2 text-accent1 px-3 py-[10px] rounded-full font-me  hover:bg-accent1/20">
            Connect
          </button>
        </div>
      </div>
    </nav>
    <main>
      <Outlet />
    </main>
    </>
  );
}

export function SearchBar() {
  return (
    <div className="flex gap-3 items-center group screens_lg:w-[360px] screens_md:w-[330px] screens_sm:w-[360px] border-[1px]  border-surface3 py-2 px-3 rounded-2xl transition-colors duration-300 hover:border-accent1">
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
