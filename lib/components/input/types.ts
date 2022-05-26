import React from "react";
import { TypesInput, border, inputSize } from "./theme";

export interface InputProps extends React.ComponentPropsWithRef<"input"> {
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
