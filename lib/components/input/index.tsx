import React from "react";
import { Input as InputContainer, Container, Content, Flex } from "./styles";
import { border as borderTheme, inputSize as sizeTheme } from "./theme";
import { InputProps } from "./types";
import * as iconSet from "react-icons/fa";

// Adicionar label X
// Adicionar placeholder X
// Adicionar icone dentro esquerda
// Adicionar icone dentro direita
// Adicionar icone fora esquerda
// Adicionar icone fora direita
// Adicionar texto de ajuda embaixo do input

export function Input(props: InputProps) {
  const borderRadius = borderTheme[props.border];
  const padding = sizeTheme[props.inputSize];

  const [IconOutsideLeft, IconOutsideRight, IconInsideLeft, IconInsideRight] = [
    iconSet[props.iconOutsideLeft] ||
      iconSet[`Fa${props.iconOutsideLeft}` as unknown as never],
    iconSet[props.iconOutsideRight] ||
      iconSet[`Fa${props.iconOutsideRight}` as unknown as never],
    iconSet[props.iconInsideLeft] ||
      iconSet[`Fa${props.iconInsideLeft}` as unknown as never],
    iconSet[props.iconInsideRight] ||
      iconSet[`Fa${props.iconInsideRight}` as unknown as never],
  ];

  const finalProps = {
    borderRadius,
    padding,
    ...props,
  };

  return (
    <>
      {props.iconInsideLeft ||
      props.iconInsideRight ||
      props.iconOutsideLeft ||
      props.iconOutsideRight ? (
        <Container>
          {props.label && <label>{props.label}</label>}
          <Flex>
            {props.iconOutsideLeft && (
              <IconOutsideLeft color={props.iconOutsideLeftColor} />
            )}
            <Content>
              {props.iconInsideLeft && (
                <IconInsideLeft
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "30%",
                    zIndex: "2",
                  }}
                  color={props.iconInsideLeftColor}
                />
              )}
              <InputContainer
                props={finalProps}
                type={props.type}
                placeholder={props.textPlaceholder && props.textPlaceholder}
              />
              {props.iconInsideRight && (
                <IconInsideRight
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "30%",
                    zIndex: "2",
                  }}
                  color={props.iconInsideRightColor}
                />
              )}
            </Content>
            {props.iconOutsideRight && (
              <IconOutsideRight color={props.iconOutsideRightColor} />
            )}
          </Flex>
          {props.supportText && <span>{props.supportText}</span>}
        </Container>
      ) : (
        <Container>
          {props.label && (
            <label style={{ marginLeft: "15px" }}>{props.label}</label>
          )}
          <InputContainer
            props={finalProps}
            type={props.type}
            placeholder={props.textPlaceholder && props.textPlaceholder}
          />
          {props.supportText && (
            <span style={{ marginLeft: "15px" }}>{props.supportText}</span>
          )}
        </Container>
      )}
    </>
  );
}

Input.defaultProps = {
  inputSize: "medium",
  border: "small",
  outlineColor: "#F6BE27",
  textPlaceholder: "Placeholder",
};
