import { InputHTMLAttributes } from "react";
import { TypesInput, border, inputSize } from "./theme";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: keyof typeof TypesInput;
  border?: keyof typeof border;
  inputSize?: keyof typeof inputSize;
  outlineColor?: string;
}

export interface InputStyleProps {
  props: {
    borderRadius?: string;
    padding?: string;
    outlineColor?: string;
  };
}
