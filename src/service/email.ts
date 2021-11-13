import emailjs, { init } from "emailjs-com";
import { emailConfig } from "./config";

init(emailConfig.userId);

export const sendEmail = (form: any) => {
  return emailjs.sendForm(
    emailConfig.serviceId,
    emailConfig.templateId,
    form.current,
    emailConfig.userId
  );
};
