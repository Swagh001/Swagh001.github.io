import React from "react";
import homeLogo from "../images/home-main.svg";
import { Text } from "@chakra-ui/react";
import Type from "./type";
import { Button } from "@chakra-ui/react";
const Itachi_Uchiha_Resume = require("../Components/Itachi_Uchiha_Resume.pdf");

const Home = () => {
  const onButtonClick = () => {
        const link = document.createElement("a");
        link.href = Itachi_Uchiha_Resume;
        link.download = "Itachi_Uchiha_Resume.pdf";
        link.click();
      };

  return (
    <div id="home">
      <div style={{ height: "500px", display: "flex", justifyContent: "space-around" }}>
        <div>
          <h1 style={{ paddingBottom: 15 }} className="heading">
            Hi There!{"  "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 className="heading-name">
            My Name is <strong className="main-name">Shailesh Wagh</strong>
          </h1>
          <div className="main-name" style={{ padding: 50, textAlign: "center", fontSize: "2.4em" }}>
            <Type />
          </div>
        </div>
        <div className="home-imgee">
          <img src={homeLogo} alt="home pic" className="home-imgee" style={{ maxHeight: "450px" }} />
        </div>
      </div>
    </div>
  );
};

export default Home;