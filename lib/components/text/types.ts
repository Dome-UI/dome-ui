import {
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textDecoration,
} from "./theme";

export interface TextProps {
  label?: string;
  tag?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "li"
    | "label"
    | "a"
    | "strong"
    | "label";
  fontSize?: keyof typeof fontSize;
  fontWeight?: keyof typeof fontWeight;
  lineHeight?: keyof typeof lineHeight;
  letterSpacing?: keyof typeof letterSpacing;
  textDecoration?: keyof typeof textDecoration;
  color?: string;
  styles?: {}
}
