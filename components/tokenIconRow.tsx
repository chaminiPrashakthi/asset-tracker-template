import Image from "next/image";
import { FC } from "react";
import aptos from "../assets/aptos.png";
import avalanche from "../assets/avalanche.png";
import bch from "../assets/bch.png";
import bnb from "../assets/bnb.png";
import btc from "../assets/btc.png";
import cardano from "../assets/cardano.png";
import chainlink from "../assets/chainlink.png";
import dai from "../assets/dai.png";
import dogecoin from "../assets/dogecoin.png";
import etc from "../assets/etc.png";
import eth from "../assets/eth.png";
import generic from "../assets/generic.png";
import icp from "../assets/icp.png";
import leo from "../assets/leo.png";
import litecoin from "../assets/litecoin.png";
import near from "../assets/near.png";
import polkadot from "../assets/polkadot.png";
import polygon from "../assets/polygon.png";
import shiba from "../assets/shiba.png";
import solana from "../assets/solana.png";
import tera from "../assets/tera.png";
import toncoin from "../assets/toncoin.png";
import tron from "../assets/tron.png";
import uni from "../assets/uni.png";
import usdc from "../assets/usdc.png";
import usdt from "../assets/usdt.png";
import xrp from "../assets/xrp.png";

interface TokenIconRowProps {
  tokenName: string;
}
// mapping for each crypto currency icon with symbol
const TokenIconRow: FC<TokenIconRowProps> = ({ tokenName }) => {
  const tokenIcon = () => {
    switch (tokenName) {
      case "BTC":
        return <Image src={btc} alt="" />;

      case "ETH":
        return <Image src={eth} alt="" />;

      case "USDT":
        return <Image src={usdt} alt="" />;

      case "BNB":
        return <Image src={bnb} alt="" />;

      case "USDC":
        return <Image src={usdc} alt="" />;

      case "XRP":
        return <Image src={xrp} alt="" />;

      case "ADA":
        return <Image src={cardano} alt="" />;

      case "Terra":
        return <Image src={tera} alt="" />;

      case "SOL":
        return <Image src={solana} alt="" />;

      case "AVAX":
        return <Image src={avalanche} alt="" />;

      case "DOGE":
        return <Image src={dogecoin} alt="" />;

      case "TON":
        return <Image src={toncoin} alt="" />;

      case "SHIB":
        return <Image src={shiba} alt="" />;

      case "DOGE":
        return <Image src={dogecoin} alt="" />;

      case "TON":
        return <Image src={toncoin} alt="" />;

      case "SHIB":
        return <Image src={shiba} alt="" />;

      case "TRX":
        return <Image src={tron} alt="" />;

      case "DOT":
        return <Image src={polkadot} alt="" />;

      case "BCH":
        return <Image src={bch} alt="" />;

      case "LINK":
        return <Image src={chainlink} alt="" />;

      case "NEAR":
        return <Image src={near} alt="" />;

      case "MATIC":
        return <Image src={polygon} alt="" />;

      case "LTC":
        return <Image src={litecoin} alt="" />;

      case "ICP":
        return <Image src={icp} alt="" />;

      case "LEO":
        return <Image src={leo} alt="" />;

      case "DAI":
        return <Image src={dai} alt="" />;

      case "UNI":
        return <Image src={uni} alt="" />;

      case "ETC":
        return <Image src={etc} alt="" />;

      case "APT":
        return <Image src={aptos} alt="" />;

      default:
        return <Image src={generic} alt="" />; //generic icon for tokens without images
    }
  };

  return (
    <div>
      <div>{tokenIcon()}</div>
    </div>
  );
};

export default TokenIconRow;
