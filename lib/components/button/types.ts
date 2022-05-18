import { buttonSize, border } from "./theme";

export interface ButtonProps {
  label: string;
  backgroundColor?: string;
  color?: string;
  fullWidth?: boolean;
  hoverColor?: string;
  clickColor?: string;
  buttonSize?: keyof typeof buttonSize;
  border?: keyof typeof border;
  styles?: {};
}
