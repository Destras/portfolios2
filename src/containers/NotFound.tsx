import React from "react";
import { useHistory } from "react-router";
import AnimatedButton from "../components/AnimatedButton";
import { ArrowRight } from "react-feather";

const NotFound = () => {
  const history = useHistory();

  const handleMoreAboutMe = () => {
    history.push("/about");
  };
  return (
    <div>
      Page Not Found{" "}
      <AnimatedButton Icon={ArrowRight} onClick={handleMoreAboutMe}>
        <span>To home</span>
      </AnimatedButton>
    </div>
  );
};

export default NotFound;
