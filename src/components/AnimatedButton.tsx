import React, { FunctionComponent } from "react";
import { IconProps } from "react-feather";
import "../styles/AnimatedButton.scss";

interface IAnimatedButton {
  children: JSX.Element;
  onClick: () => void;
  Icon: FunctionComponent<IconProps>;
}

const AnimatedButton = ({ children, onClick, Icon }: IAnimatedButton) => {
  return (
    <button className="animatedButton" onClick={onClick}>
      {children}
      <div className="animatedButton_circle">
        <Icon />
      </div>
    </button>
  );
};

export default AnimatedButton;
