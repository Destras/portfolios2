import React, { useState } from "react";
import "../styles/PortfoliosItem.scss";
import Modal from "./Modal";

interface IPortfoliosItem {
  children: JSX.Element;
  backgroundImg: string;
  webUrl: string;
  technologyStack: string;
  originalBewSite?: string;
  webVisibleLink: string;
}

const PortfoliosItem = ({
  children,
  backgroundImg,
  technologyStack,
  webUrl,
  originalBewSite,
  webVisibleLink,
}: IPortfoliosItem) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div onClick={toggleModal} className="portfoliosItem_container">
        <img
          className="portfoliosItem_img"
          src={backgroundImg}
          alt="portfolio background"
        />
        <div className="portfoliosItem_title">{children}</div>
      </div>
      <Modal isOpen={modalIsOpen} toggleModal={toggleModal}>
        <div className="portfoliosItem_modal">
          <div className="portfoliosItem_modal_header">{children}</div>
          <div className="portfoliosItem_modal_body">
            <span>Stack:&nbsp;{technologyStack}</span>
            <span>
              Website:&nbsp;
              <a href={webUrl} target="_blank">
                {webVisibleLink}
              </a>
            </span>
            {originalBewSite && (
              <span>
                Original bewSite:&nbsp;
                <a href={originalBewSite} target="_blank">
                  {originalBewSite}
                </a>
              </span>
            )}
          </div>
          <div className="portfoliosItem_modal_imgContainer">
            <img src={backgroundImg} alt="portfolio background" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PortfoliosItem;
