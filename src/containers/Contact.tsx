import React from "react";
import "../styles/Contact.scss";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <Title subTitle="CONTACT">
        <span>
          GET IN <span className="contact_meColour">TOUCH</span>
        </span>
      </Title>
      <div className="contact_container">
        <div className="contact_info">
          <h3>
            <span className="contact_meColour">Don’t be a stranger</span> <br />
            just say hello.
          </h3>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
        </div>
        <div className="contact_formContainer"></div>
      </div>
    </div>
  );
};

export default Contact;
