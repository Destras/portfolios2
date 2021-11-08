import React from "react";
import "../styles/Portfolios.scss";
import Title from "../components/Title";
import PortfoliosItem from "../components/PortfoliosItem";
import opgg from "../assets/portFolioImgs/op-gg1.png";
import mercadojuan from "../assets/portFolioImgs/mercadojuan1.jpg";
import lava from "../assets/portFolioImgs/lava.jpg";

const Portfolios = () => {
  return (
    <div>
      <Title subTitle="works">
        <span>
          MY <span className="works_titleColor">PORTFOLIO</span>
        </span>
      </Title>
      <div className="works_projectContainer">
        <PortfoliosItem backgroundImg={opgg}>
          <span>project op.gg</span>
        </PortfoliosItem>
        <PortfoliosItem backgroundImg={mercadojuan}>
          <span>MercadoJuan</span>
        </PortfoliosItem>
        <PortfoliosItem backgroundImg={lava}>
          <span>Lava Stock</span>
        </PortfoliosItem>
      </div>
    </div>
  );
};

export default Portfolios;
