// Bibliotecas, theme
import * as iconSet from "react-icons/fa";
import { buttonSize, border } from "./theme";

// Types próprio do componente
export interface ButtonProps {
  label?: string;
  backgroundColor?: string;
  color?: string;
  fullWidth?: boolean;
  hoverColor?: string;
  clickColor?: string;
  buttonSize?: keyof typeof buttonSize;
  border?: keyof typeof border;
  styles?: {};
  iconLeft?: keyof typeof iconSet;
  IconRight?: keyof typeof iconSet;
  IconCenter?: keyof typeof iconSet;
}

// Types da estilização do componente (Styled components)
export interface ButtonStylesProps {
  props: {
    backgroundColor?: string;
    color?: string;
    fullWidth?: boolean;
    hoverColor?: string;
    clickColor?: string;
    styles?: {};
    padding: string;
    borderRadius: string;
  };
}
