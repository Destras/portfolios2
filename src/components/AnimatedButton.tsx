import React, { FunctionComponent, SyntheticEvent } from "react";
import { IconProps } from "react-feather";
import "../styles/AnimatedButton.scss";

interface IAnimatedButton {
  children: JSX.Element;
  onClick: (e?: SyntheticEvent<any>) => void;
  Icon: FunctionComponent<IconProps>;
  type?: "button" | "submit" | "reset";
}

const AnimatedButton = ({ children, onClick, Icon, type }: IAnimatedButton) => {
  return (
    <button type={type} className="animatedButton" onClick={onClick}>
      {children}
      <div className="animatedButton_circle">
        <Icon />
      </div>
    </button>
  );
};

export default AnimatedButton;
