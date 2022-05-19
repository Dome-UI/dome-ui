import React from "react";
import * as iconSet from "react-icons/fa";
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

  /*
    Assim declarando cada variavel individua 
  */
  // const IconLeft =
  //   iconSet[props.iconLeft] ||
  //   iconSet[`Fa${props.iconLeft}` as unknown as never];

  // const IconRight =
  //   iconSet[props.IconRight] ||
  //   iconSet[`Fa${props.IconRight}` as unknown as never];

  // const IconCenter =
  //   iconSet[props.IconCenter] ||
  //   iconSet[`Fa${props.IconCenter}` as unknown as never];

  /*
    Assim declarando as três variaveis ao mesmo tempo
  */
  const [IconLeft, IconRight, IconCenter] = [
    iconSet[props.iconLeft] ||
      iconSet[`Fa${props.iconLeft}` as unknown as never],
    iconSet[props.IconRight] ||
      iconSet[`Fa${props.IconRight}` as unknown as never],
    iconSet[props.IconCenter] ||
      iconSet[`Fa${props.IconCenter}` as unknown as never],
  ];

  return (
    <Container props={finalProps}>
      <>
        {/* Verificação para ver se é o icone do meio, se for renderiza APENAS ele, se não renderiza o resto */}
        {props.IconCenter ? (
          <IconCenter />
        ) : (
          <>
            {props.iconLeft && <IconLeft />}
            {props.label}
            {props.IconRight && <IconRight />}
          </>
        )}
      </>
    </Container>
  );
}
