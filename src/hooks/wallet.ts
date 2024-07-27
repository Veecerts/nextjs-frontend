import { atom, useAtom } from "jotai";
import {
  isConnected,
  getPublicKey,
  signAuthEntry,
  signTransaction,
  signBlob,
  requestAccess,
  isAllowed,
  getNetwork,
} from "@stellar/freighter-api";
import React from "react";

export const walletAtom = atom({
  isConnected: false,
  publicKey: "",
  signAuthEntry,
  signTransaction,
  signBlob,
  getPublicKey,
});

const useWallet = () => {
  const [value, setValue] = useAtom(walletAtom);
  const [allowed, setAllowed] = React.useState(false);
  const [network, setNetwork] = React.useState("TESTNET");

  React.useEffect(() => {
    (async () => {
      const connected = await isConnected();
      const publicKey = await getPublicKey();
      const allowed = await isAllowed();
      const net = await getNetwork();

      setNetwork(net);
      setAllowed(allowed);
      setValue((c) => ({ ...c, isConnected: connected, publicKey }));
    })();
  }, []);

  const connectWallet = async () => {
    const publicKey = await requestAccess();
    setValue((c) => ({ ...c, publicKey }));
  };

  return { ...value, connectWallet, isAllowed: allowed, network };
};

export default useWallet;
