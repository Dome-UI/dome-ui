import styled from "styled-components";
import { InputStyleProps } from "./types";

export const Input = styled.input<InputStyleProps>`
   border-radius: ${(props) => props.props.borderRadius};
   padding: ${(props) => props.props.padding};

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    outline-color: ${(props) => props.props.outlineColor};
    outline-width: 2px;
  }
`;
