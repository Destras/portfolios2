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
        <PortfoliosItem
          webVisibleLink={"opjj.herokuapp.com"}
          webUrl="https://opjj.herokuapp.com/"
          technologyStack="React, Express"
          backgroundImg={opgg}
          originalBewSite="op.gg"
        >
          <span>project op.gg</span>
        </PortfoliosItem>
        <PortfoliosItem
          webVisibleLink={"mercadojuan-cf065.web.app"}
          webUrl="https://mercadojuan-cf065.web.app/"
          technologyStack="React, Firebase"
          backgroundImg={mercadojuan}
        >
          <span>MercadoJuan</span>
        </PortfoliosItem>
        <PortfoliosItem
          webUrl="https://www.google.com/search?q=lava&sxsrf=AOaemvKcgqWM7P25ObUaYHvWj8qQmpvizA:1636586667449&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi929O3-I70AhVCrZUCHdkKA4kQ_AUoAXoECAEQAw&biw=1920&bih=912&dpr=1"
          webVisibleLink={"lavaStock"}
          technologyStack="Rocks, Heat"
          backgroundImg={lava}
        >
          <span>Lava Stock</span>
        </PortfoliosItem>
      </div>
    </div>
  );
};

export default Portfolios;
