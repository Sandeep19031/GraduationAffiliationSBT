import axios from "axios";
import {
  CONTRACT_ADDR,
  NETWORK,
  POLYGON_MAIN_API,
  POLYGON_TEST_API,
  POLYGON_TEST_API_AUTHORIZATION,
} from "../constants";

// Get TXHash from the server
export const getTXHash = async (address, sbtId) => {
  try {
    const url = NETWORK === "testnet" ? POLYGON_TEST_API : POLYGON_MAIN_API;
    console.log("url", url);

    // fetching all the  tokens of the address minted from the contract
    const tokenTxRes = await axios.get(`${url}`, {
      params: {
        module: "account",
        action: "tokennfttx",
        contractAddress: CONTRACT_ADDR,
        address: address,
        apikey: POLYGON_TEST_API_AUTHORIZATION,
      },
    });

    const tokenList = await tokenTxRes?.data.result;

    console.log("tokenList", tokenList);

    //filtering token list to get the txHash of the token with the given sbtId
    const txHash = tokenList?.filter(
      (data) => Number(data.tokenID) === sbtId
    )[0].hash;

    console.log("txHash", txHash);

    return txHash;
  } catch (error) {
    console.log("getTxHash", error);
    return false;
  }
};
