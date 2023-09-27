import Web3Service from "./Web3Service";
import axios from "axios";

export const getTokenUri = async (sbtId) => {
  try {
    const res = await Web3Service.contract.tokenURI(sbtId);
    return res;
  } catch (err) {
    console.log("error in getTokenUri fnc", err);
    return false;
  }
};

export const getSbtIdfnc = async (addr) => {
  try {
    const res = await Web3Service.contract.studentSbtId(addr);
    console.log("res in getSbtIdfnc", res);
    return Number(res);
  } catch (err) {
    console.log("Error in getSbtIdfnc", err);
    return false;
  }
};

export const getSbtInfofnc = async (id) => {
  try {
    const res = await Web3Service.contract.studentSbtInfo(id);
    return res;
  } catch (err) {
    console.log("Error in getSbtInfofnc", err);
    return false;
  }
};

export const getHashData = async (data) => {
  try {
    return await axios("https://ipfs.io/ipfs/" + data);
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
