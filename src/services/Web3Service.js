import { ethers } from "ethers";
import GRADUATION_ABI from "../abi/Graduation.json";
import { CONTRACT_ADDR, POLYGON_MAINNET } from "../constants";

class Web3Setup {
  web3 = "";
  contract = {};

  constructor() {
    const provider = new ethers.providers.JsonRpcProvider(POLYGON_MAINNET);
    this.web3 = provider;
    this.initContract();
  }

  initContract() {
    try {
      this.contract = new ethers.Contract(
        CONTRACT_ADDR,
        GRADUATION_ABI.abi,
        this.web3
      );
      console.log("contract object created...");
    } catch (error) {
      throw error;
    }
  }
}

const Web3Service = new Web3Setup();
export default Web3Service;
