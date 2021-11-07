import React from "react";
import "../styles/DataBox.scss";

interface IDataBox {
  number: number;
  title: string;
}

const DataBox = ({ number, title }: IDataBox) => {
  return (
    <div className="dataBoxContainer">
      <h4 className="dataBoxContainer_number">{number}</h4>
      <div className="dataBoxContainer_title">
        {title.split("<br />").map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default DataBox;
