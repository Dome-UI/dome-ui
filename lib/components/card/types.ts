import * as iconSet from "react-icons/fa";
import { positionTitle } from "./theme";

export interface CardProps {
  title?: string;
  positionTitle?: keyof typeof positionTitle;
  imageUrl?: string;

  buttonLeftTitle?: keyof typeof iconSet;
  buttonLeftTitleHref?: string;
  buttonLeftTitleColor?: string;

  buttonRightTitle?: keyof typeof iconSet;
  buttonRightTitleHref?: string;
  buttonRightTitleColor?: string;

  buttonLeftDescription?: keyof typeof iconSet;
  buttonLeftDescriptionHref?: string;
  buttonLeftDescriptionColor?: string;

  buttonRightDescription?: keyof typeof iconSet;
  buttonRightDescriptionHref?: string;
  buttonRightDescriptionColor?: string;

  buttonReadMore?: boolean;
  descriptionText?: string;
  description?: boolean;
  styles?: {};
}

export interface ContainerProps {
  descriptionVisible?: boolean;
  props: {
    styles?: {};
  };
}

export interface HeaderProps {
  props: {
    textAlign?: string;
  };
}
