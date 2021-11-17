import React, { FunctionComponent } from "react";
import { IconProps } from "react-feather";
import "../styles/Contact.scss";

interface ISocialNetworkLinkButton {
  Icon: FunctionComponent<IconProps>;
  link: string;
}

const SocialNetworkLinkButton = ({ Icon, link }: ISocialNetworkLinkButton) => {
  return (
    <a className="socialNetworkLinkButton" href={link} target="_blank">
      <Icon />
    </a>
  );
};

export default SocialNetworkLinkButton;
