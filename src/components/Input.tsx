import React, { InputHTMLAttributes } from "react";
import "../styles/Input.scss";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: IInput) => {
  return <input className="input" type="text" {...props} />;
};

export default Input;

interface ITextarea extends InputHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = (props: ITextarea) => {
  return <textarea className="textArea" {...props} />;
};
