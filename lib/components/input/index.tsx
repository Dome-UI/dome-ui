import { Input as InputContainer } from "./styles";
import { border as borderTheme, inputSize as sizeTheme } from "./theme";
import { InputProps } from "./types";

export function Input({
  type,
  border,
  inputSize,
  outlineColor,
  ...rest
}: InputProps) {
  const borderRadius = borderTheme[border];
  const padding = sizeTheme[inputSize];

  const finalProps = {
    borderRadius,
    padding,
  };

  return <InputContainer props={finalProps} type={type} {...rest} />;
}

Input.defaultProps = {
  inputSize: "medium",
  border: "small",
  outlineColor: "#F6BE27",
};
