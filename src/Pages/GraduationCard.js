import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TXHASH_MAINNET } from "../constants";
import { getTXHash } from "../services/ServerService";
import {
  getSbtIdfnc,
  getSbtInfofnc,
  getTokenUri,
} from "../services/ContractServices";
import logo from "../Theme/Assets/Images/Logo.svg.png";
import "./GraduationCard.scss";
import { toast } from "../Components/Layout/Toasts/Toast";
import Loader from "../Components/LoaderComponent/Loader";

const CardFront = ({ sbtDetails, tokenDetails, txHash }) => {
  return (
    <div className="idCard_Front level-3">
      <div className="idCard_header">
        <div className="header_text">
          <p>INDIAN INSTITUTE OF TECHNOLOGY GOA</p>
          <p>भारतीय प्रौद्योगिकी संस्थान गोवा</p>
          <p>
            An Autonomous Institution Of Ministry of HRD, Government of India
          </p>
        </div>
        <div className="header_logo">
          <img src={logo} alt="IIT Goa" width="100px" height="100px" />
        </div>
      </div>
      <div className="horizontalLine" id="upHorizon" />
      <div className="idCard_body">
        <div className="idCard_body_left">
          <div className="photoOutline">
            <img src={tokenDetails} alt="img" width="120px" height="150px" />
          </div>
        </div>
        <div className="idCard_body_right">
          <div>
            <div className="studentName">
              <p>{sbtDetails.StudentName}</p>
            </div>
            <div className="studentBranch">
              <p>Roll No: {sbtDetails.RollNumber}</p>
            </div>
            <div className="studentRollNo">
              <p>{sbtDetails.Degree}</p>
            </div>
            <div className="idCardValidity">
              <p>{sbtDetails.Branch}</p>
            </div>
            <div className="idCardValidity">
              <p>Batch: {sbtDetails.Batch}</p>
            </div>
          </div>
          <div>
            <div className="studentName">
              <p> CPI: {sbtDetails.CPI}</p>
            </div>
            <div className="studentBranch">
              <p>Issuer Name: {sbtDetails.IssuerName}</p>
            </div>
            <div className="studentRollNo">
              <p>Issued Date: {sbtDetails.IssuedDate}</p>
            </div>
            <div className="idCardValidity">
              <p>SBT ID: {Number(sbtDetails.SbtId)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontalLine" id="bottomHorizon" />
      <div className="graduationBottom">
        <p>
          Graduation SBT, Assures that this student have graduated from IIT Goa.
        </p>
        <p>
          Verify this SBT:{" "}
          <a
            href={`${TXHASH_MAINNET}/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{txHash}</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default function GraduationCard() {
  console.log("I'm at ID Card.js");

  const { address } = useParams();
  console.log("address: ", address);
  const [sbtDetails, setSbtDetails] = useState();
  const [tokenDetails, setTokenDetails] = useState();
  const [txHash, setTxHash] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    const fetchdata = async () => {
      // 1. Get SBT ID from address
      const sbtId = await getSbtIdfnc(address);

      if (sbtId === 0) {
        setLoader(false);
        toast.error("No SBT found for this address");
        return;
      }

      // 2. Get Token Uri
      const tokenUri = await getTokenUri(sbtId);
      console.log("tokenUri: ", tokenUri);

      // 3. Get SBT Details
      const sbtDetails = await getSbtInfofnc(sbtId);
      console.log("sbtDetails: ", sbtDetails);
      setSbtDetails(sbtDetails);

      // 4. Get Token Details
      const src = "https://ipfs.io/ipfs/" + tokenUri;
      setTokenDetails(src);

      // 5. Get TxHash
      const data2 = await getTXHash(address, sbtId);
      console.log("txHash: ", data2);
      setTxHash(data2);
      setLoader(false);
    };
    fetchdata();
  }, [address]);

  return (
    <div className="idCard">
      {loader && <Loader />}
      {tokenDetails && (
        <CardFront
          sbtDetails={sbtDetails}
          tokenDetails={tokenDetails}
          txHash={txHash}
        />
      )}
    </div>
  );
}
