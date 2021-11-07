import React from "react";
import "../styles/About.scss";
import Title from "../components/Title";
import AnimatedButton from "../components/AnimatedButton";
import { Download } from "react-feather";
import DataBox from "../components/DataBox";
import Separator from "../components/Separator";
import HtmlSvg from "../assets/imgs/HtmlSvg";
import ReactSvg from "../assets/imgs/ReactSvg";
import ReactRouterDomSvg from "../assets/imgs/ReactRouterDomSvg";
import SassSvg from "../assets/imgs/SassSvg";
import JavascriptSvg from "../assets/imgs/JavascriptSvg";
import ReduxSvg from "../assets/imgs/ReduxSvg";

interface IPersonalInfo {
  name: string;
  value: string;
}
const personalInfo: IPersonalInfo[] = [
  { name: "first name", value: "Juan Ignacio" },
  { name: "Last Name", value: "Werkalec" },
  { name: "Age", value: "22 Years Old" },
  { name: "Nationality", value: "Argentinian" },
  { name: "Email", value: "juan.werkalec@gmail.com" },
  { name: "languages", value: "Spanish, English, JS" },
];

const About = () => {
  const onCVDownload = () => {
    var element = document.createElement("a");
    element.setAttribute("href", encodeURIComponent("src/assets/cv.pdf"));
    element.setAttribute(
      "download",
      "Curriculum Vitae Juan Ignacio Werkalec.pdf"
    );
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="aboutContainer">
      <Title subTitle="RESUME">
        <span>
          ABOUT <span className="about_meColour">ME</span>
        </span>
      </Title>

      <div className="about_personalInfoContainer">
        <div className="about_personalInfoContainer_info">
          <h3 className="about_personalInfoContainer_info_title">
            personal info
          </h3>

          <div className="about_personalInfoContainer_info_listContainer">
            <ul className="about_personalInfoContainer_info_list">
              {personalInfo.map((item) => (
                <li key={item.name}>
                  <span className="about_personalInfoContainer_info_list_name">
                    {item.name}:{" "}
                  </span>
                  <span>{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <AnimatedButton Icon={Download} onClick={onCVDownload}>
            <span>DOWLOAD CV</span>
          </AnimatedButton>
        </div>

        <div className="about_personalInfoContainer_box">
          <DataBox number={1.5} title="YEARS OF <br /> EXPERIENCE" />
          <DataBox number={1200} title="COMPONENTS <br /> DONE" />
          <DataBox number={200} title="SCRUM DAILIES <br /> DONE" />
          <DataBox number={2} title="HAPPY <br /> BOSSES" />
        </div>
      </div>

      <Separator />

      <div className="aboutContainer_skills">
        <h3 className="aboutContainer_skills_title">my skills</h3>
        <div className="aboutContainer_skills_mySkills">
          <HtmlSvg />
          <ReactSvg />
          <ReactRouterDomSvg />
          <SassSvg />
          <JavascriptSvg />
          <ReduxSvg />
        </div>
      </div>
    </div>
  );
};

export default About;
