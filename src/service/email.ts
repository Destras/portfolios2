import emailjs, { init } from "emailjs-com";
import { RefObject } from "react";
import { emailConfig } from "./config";

init(emailConfig.userId);

export const sendEmail = (form: RefObject<HTMLFormElement>) => {
  return emailjs.sendForm(
    emailConfig.serviceId,
    emailConfig.templateId,
    form.current,
    emailConfig.userId
  );
};
