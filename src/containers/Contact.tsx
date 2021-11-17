import React, { SyntheticEvent, useRef } from "react";
import "../styles/Contact.scss";
import Title from "../components/Title";
import { Linkedin } from "react-feather";
import Input, { TextArea } from "../components/Input";
import AnimatedButton from "../components/AnimatedButton";
import { Send } from "react-feather";
import { sendEmail } from "../service/email";
import Toast from "../components/Toast";
import useStatus from "../customHooks/useStatus";
import SocialNetworkLinkButton from "../components/SocialNetworkLinkButton";

const Contact = () => {
  const form = useRef<HTMLFormElement>();

  const { status, setLoading, setRejected, setSuccess } = useStatus();

  const handleSendForm = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading();

    sendEmail(form)
      .then(() => {
        form.current.reset();
        setSuccess();
      })
      .catch(() => setRejected());
  };

  return (
    <div>
      <Toast status={status} />
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
            new opportunities to be part of your visions.
          </p>
          <div>
            <SocialNetworkLinkButton
              Icon={Linkedin}
              link="https://www.linkedin.com/in/juan-ignacio-werkalec/"
            />
          </div>
        </div>
        <form ref={form} className="contact_formContainer">
          <div className="contact_formContainer_nameEmail marginBottom">
            <div className="">
              <Input placeholder="YOUR NAME" name="name" />
            </div>

            <div className="">
              <Input placeholder="YOUR EMAIL" name="email" />
            </div>
          </div>

          <div className="marginBottom">
            <Input placeholder="SUBJECT" name="subject" />
          </div>
          <div className="marginBottom">
            <TextArea placeholder="MESSAGE" name="message" />
          </div>
          <div className="contact_formContainer_nameEmail_sendButton">
            <AnimatedButton onClick={handleSendForm} Icon={Send}>
              <span>SEND MESSAGE</span>
            </AnimatedButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
