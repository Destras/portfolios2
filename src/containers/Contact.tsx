import React, { useRef, useState } from "react";
import "../styles/Contact.scss";
import Title from "../components/Title";
import Input, { TextArea } from "../components/Input";
import AnimatedButton from "../components/AnimatedButton";
import { Send } from "react-feather";
import { sendEmail } from "../service/email";

enum statusState {
  WAITING = "WAITING",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  REJECTED = "REJECTED",
}

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState<statusState>(statusState.WAITING);

  const handleSendForm = (e: any) => {
    e.preventDefault();

    sendEmail(form)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

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
            new opportunities to be part of your visions.
          </p>
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
            <Input placeholder="YOUR SUBJECT" name="subject" />
          </div>
          <div className="marginBottom">
            <TextArea placeholder="YOUR MESSAGE" name="message" />
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
