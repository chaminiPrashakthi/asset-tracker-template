import { FC } from "react";
import Image from "next/image";
import btc from "../assets/btc.png";
import eth from "../assets/eth.png";
import usdc from "../assets/usdc.png";
import usdt from "../assets/usdt.png";
import xrp from "../assets/xrp.png";
import cardano from "../assets/cardano.png";
import tera from "../assets/tera.png";
import solana from "../assets/solana.png";
import avalanche from "../assets/avalanche.png";
import bnb from "../assets/bnb.png";
import dogecoin from "../assets/dogecoin.png";
import toncoin from "../assets/toncoin.png";
import shiba from "../assets/shiba.png";
import tron from "../assets/tron.png";
import polkadot from "../assets/polkadot.png";
import bch from "../assets/bch.png";
import chainlink from "../assets/chainlink.png";
import near from "../assets/near.png";
import polygon from "../assets/polygon.png";
import litecoin from "../assets/litecoin.png";
import icp from "../assets/icp.png";
import aptos from "../assets/aptos.png";
import uni from "../assets/uni.png";
import dai from "../assets/dai.png";
import leo from "../assets/leo.png";
import etc from "../assets/etc.png";
import generic from "../assets/generic.png";

interface CoinNameRowProps {
  tokenName: string;
  tokenIcon: string;
}

const CoinNameRow: FC<CoinNameRowProps> = ({ tokenName }) => {
  const coinIcon = () => {
    console.log(tokenName);

    switch (tokenName) {
      case "BTC":
        return <Image src={btc} className="rounded-full" width={25} height={25} alt="" />;

      case "ETH":
        return <Image src={eth} className="rounded-full" width={20} height={20} alt="" />;

      case "USDT":
        return <Image src={usdt} className="rounded-full" width={20} height={20} alt="" />;

      case "BNB":
        return <Image src={bnb} className="rounded-full" width={20} height={20} alt="" />;

      case "USDC":
        return <Image src={usdc} className="rounded-full" width={20} height={20} alt="" />;

      case "XRP":
        return <Image src={xrp} className="rounded-full" width={20} height={20} alt="" />;

      case "ADA":
        return <Image src={cardano} className="rounded-full" width={20} height={20} alt="" />;

      case "Terra":
        return <Image src={tera} className="rounded-full" width={20} height={20} alt="" />;

      case "SOL":
        return <Image src={solana} className="rounded-full" width={20} height={20} alt="" />;

      case "AVAX":
        return <Image src={avalanche} className="rounded-full" width={20} height={20} alt="" />;
      case "DOGE":
        return <Image src={dogecoin} className="rounded-full" width={20} height={20} alt="" />;
      case "TON":
        return <Image src={toncoin} className="rounded-full" width={20} height={20} alt="" />;
      case "SHIB":
        return <Image src={shiba} className="rounded-full" width={20} height={20} alt="" />;
      case "DOGE":
        return <Image src={dogecoin} className="rounded-full" width={20} height={20} alt="" />;
      case "TON":
        return <Image src={toncoin} className="rounded-full" width={20} height={20} alt="" />;
      case "SHIB":
        return <Image src={shiba} className="rounded-full" width={20} height={20} alt="" />;
      case "TRX":
        return <Image src={tron} className="rounded-full" width={20} height={20} alt="" />;
      case "DOT":
        return <Image src={polkadot} className="rounded-full" width={20} height={20} alt="" />;
      case "BCH":
        return <Image src={bch} className="rounded-full" width={20} height={20} alt="" />;
      case "LINK":
        return <Image src={chainlink} className="rounded-full" width={20} height={20} alt="" />;
      case "NEAR":
        return <Image src={near} className="rounded-full" width={20} height={20} alt="" />;
      case "MATIC":
        return <Image src={polygon} className="rounded-full" width={20} height={20} alt="" />;
      case "LTC":
        return <Image src={litecoin} className="rounded-full" width={20} height={20} alt="" />;
      case "ICP":
        return <Image src={icp} className="rounded-full" width={20} height={20} alt="" />;
      case "LEO":
        return <Image src={leo} className="rounded-full" width={20} height={20} alt="" />;
      case "DAI":
        return <Image src={dai} className="rounded-full" width={20} height={20} alt="" />;
      case "UNI":
        return <Image src={uni} className="rounded-full" width={20} height={20} alt="" />;
      case "ETC":
        return <Image src={etc} className="rounded-full" width={20} height={20} alt="" />;
      case "APT":
        return <Image src={aptos} className="rounded-full" width={20} height={20} alt="" />;
      default:
        return <Image src={generic} className="rounded-full" width={20} height={20} alt="" />;
    }
  };

  return (
    <div>
      <div>{coinIcon()}</div>
    </div>
  );
};

export default CoinNameRow;
