import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { AddressIcon } from "../Theme/Assets/Svg/SvgImages";
import ButtonCustom from "../Components/Button/ButtonCustom";
import LayoutCard from "../Components/LayoutCard/LayoutCard";
import CustomInput from "../Components/CustomInput/CustomInput";

import "./SbtSearch.scss";
import { useNavigate } from "react-router-dom";

const SbtSearch = () => {
  const navigate = useNavigate();
  const [inputAddr, setInputAddr] = useState("");

  const handleSearch = async (e) => {
    const addr = inputAddr;

    navigate(`/sbtSearch/${addr}`);
  };

  return (
    <LayoutCard title="IIT Goa Affiliation Membership SBT">
      <Form>
        <Row className="search-row align-items-end">
          <Col md={8} className="d-flex align-items-end">
            <div onChange={(e) => setInputAddr(e.target.value)}>
              <CustomInput
                icon={<AddressIcon />}
                label="Wallet Address"
                placeholder="Enter Your Wallet Address"
                type="text"
                className="mb-0"
                value={inputAddr}
              />
            </div>

            <ButtonCustom
              title="Search"
              className="ms-4"
              onClick={(e) => {
                handleSearch(e);
              }}
            />
          </Col>
        </Row>
      </Form>
    </LayoutCard>
  );
};

export default SbtSearch;
