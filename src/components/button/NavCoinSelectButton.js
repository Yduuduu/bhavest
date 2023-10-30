import React from "react";
import ico_ethereum from "../../assets/svg/ico_ethereum.png";
import ico_arbitrum from "../../assets/svg/ico_arbitrum.png";
import ico_optimism from "../../assets/svg/ico_optimism.png";
import ico_polygon from "../../assets/svg/ico_polygon.png";
import ico_base from "../../assets/svg/ico_base.png";
import ico_BNBChain from "../../assets/svg/ico_BNBChain.png";
import ico_avalanche from "../../assets/svg/ico_avalanche.png";
import ico_celo from "../../assets/svg/ico_celo.png";
import ico_top_arrow from "../../assets/svg/ico_top_arrow.svg";
import ico_check from "../../assets/svg/ico_check.svg";

export const coinList = [
  { name: "Ethereum", img: ico_ethereum },
  { name: "Arbitrum", img: ico_arbitrum },
  { name: "Optimism", img: ico_optimism },
  { name: "Polygon", img: ico_polygon },
  { name: "Base", img: ico_base },
  { name: "BNB Chain", img: ico_BNBChain },
  { name: "Avalanche", img: ico_avalanche },
  { name: "Celo", img: ico_celo },
];

export default function NavCoinSelectButton({
  nowIco,
  setNowIco,
  isActiveIco,
  setIsActiveIco,
  buttonHadler,
}) {
  const selectedCoin = coinList.find((coin) => coin.name === nowIco);

  return (
    <div className="relative">
      <button
        className="flex gap-2 items-center p-2 hover:bg-surface2 hover:rounded-xl "
        onClick={buttonHadler}
      >
        {selectedCoin && (
          <img src={selectedCoin.img} alt="ico" className=" h-6 w-6" />
        )}
        <img
          src={ico_top_arrow}
          alt="ico"
          style={isActiveIco ? { transform: "scaleY(-1)" } : {}}
        />
      </button>
      {isActiveIco && (
        <SelectList
          nowIco={nowIco}
          setNowIco={setNowIco}
          setIsActiveIco={setIsActiveIco}
        />
      )}
    </div>
  );
}

export function SelectList({ nowIco, setNowIco, setIsActiveIco }) {
  return (
    <div className="absolute bg-surface2 shadow-[0_4px_12px_0_#00000026] top-14 right-0 p-2 rounded-xl ">
      {coinList.map((item, idx) => {
        return (
          <button
            key={idx}
            className="py-[10px] px-2 flex items-center justify-between hover:bg-surface3 hover:rounded-xl w-60"
            value={item.name}
            onClick={(e) =>
              setTimeout(() => {
                setNowIco(e.target.value);
                setIsActiveIco(false);
              }, 600)
            }
          >
            <div className="flex items-center">
              <img className="mr-3" src={item.img} alt="icon" />
              <span>{item.name}</span>
            </div>
            {item.name === nowIco && (
              <div className="flex items-center">
                <img src={ico_check} alt="icon" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
