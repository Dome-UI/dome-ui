import React from "react";
import { Container } from "./styles";
import { ButtonProps } from "./types";
import { buttonSize, border } from "./theme";

export function Button(props: ButtonProps): JSX.Element {
  const borderRadius = border[props.border];
  const padding = buttonSize[props.buttonSize];

  const finalProps = {
    padding,
    borderRadius,
    ...props,
  };

  return <Container props={finalProps}>{props.label}</Container>;
}
