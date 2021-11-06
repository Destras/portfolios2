import React from "react";
import "../styles/Home.scss";
import AnimatedButton from "../components/AnimatedButton";
import { ArrowRight } from "react-feather";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  const handleMoreAboutMe = () => {
    history.push("/about");
  };

  return (
    <div className="homeContainer">
      <div className="homeContainer_background" />
      <div className="homeContainer_content">
        <div className="home_imgContainer" />
        <div className="home_me">
          <h1 className="home_me_title">
            I'M JUAN IGNACIO <br /> WERKALEC.
            <br />
            <span>WEB DEVELOPER</span>
          </h1>
          <p className="home_me_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            euismod blandit accumsan. Phasellus a dignissim nisl. Maecenas
            egestas enim eget orci consequat, vel dictum elit lacinia. Aenean
            ultrices in purus ornare pharetra. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Proin vitae gravida nisl. Mauris quis
            sapien lectus.
          </p>
          <span className="home_me_button">
            <AnimatedButton Icon={ArrowRight} onClick={handleMoreAboutMe}>
              <span>MORE ABOUT ME</span>
            </AnimatedButton>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
