import React from "react";

const border = {
  none: "0",
  small: "4px",
  medium: "10px",
  full: "10000px",
};

const buttonSize = {
  xsmall: "4px 8px",
  small: "8px 10px",
  medium: "10px 12px",
  large: "10px 14px",
  xlarge: "14px 20px",
};

interface ButtonProps {
  label: string;
  backgroundColor?: string;
  color?: string;
  fullWidth?: boolean;
  buttonSize?: keyof typeof buttonSize;
  border?: keyof typeof border;
}

export function Button({
  label,
  backgroundColor,
  color,
  fullWidth,
  ...props
}: ButtonProps): JSX.Element {
  const borderRadius = border[props.border];
  const padding = buttonSize[props.buttonSize];

  const style = {
    width: fullWidth ? "100%" : "auto",
    padding,
    backgroundColor,
    borderRadius,
    color: color ? color : color,
    background: backgroundColor ? backgroundColor : backgroundColor,
    transition: "all 0.2s",
    cursor: "pointer",
    border: 'none',
  };

  return (
    <button style={style}>
      {label}
    </button>
  );
}