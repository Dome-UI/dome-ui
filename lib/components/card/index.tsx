import React, { useState } from "react";
import { Container, Header, Footer } from "./styles";
import { CardProps } from "./types";
import * as iconSet from "react-icons/fa";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { positionTitle } from "./theme";

export function Card(props: CardProps) {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const textAlign = positionTitle[props.positionTitle];

  const finalProps = {
    textAlign,
  };

  function handleDescriptionVisible() {
    setDescriptionVisible(!descriptionVisible);
  }

  const [
    ButtonLeftTitle,
    ButtonRightTitle,
    ButtonLeftDescription,
    ButtonRightDescription,
  ] = [
    iconSet[props.buttonLeftTitle] ||
      iconSet[`Fa${props.buttonLeftTitle}` as unknown as never],
    iconSet[props.buttonRightTitle] ||
      iconSet[`Fa${props.buttonRightTitle}` as unknown as never],
    iconSet[props.buttonRightDescription] ||
      iconSet[`Fa${props.buttonRightDescription}` as unknown as never],
    iconSet[props.buttonRightDescription] ||
      iconSet[`Fa${props.buttonRightDescription}` as unknown as never],
  ];

  return (
    <Container descriptionVisible>
      {/* Header */}
      <Header props={finalProps}>
        {props.buttonLeftTitle && (
          <a href={props.buttonLeftTitleHref} target="_blank">
            <ButtonLeftTitle
              color={props.buttonLeftTitleColor}
              fontSize="24px"
            />
          </a>
        )}

        {props.title && <p>{props.title}</p>}

        {props.buttonRightTitle && (
          <a href={props.buttonRightTitleHref} target="_blank">
            <ButtonRightTitle color={props.buttonRightTitleColor} />
          </a>
        )}
      </Header>

      {/* Image */}
      {props.imageUrl && <img src={props.imageUrl} />}

      {/* Footer */}
      {props.buttonRightDescription ||
      props.buttonReadMore ||
      props.buttonLeftDescription ? (
        <Footer>
          {props.description && descriptionVisible && (
            <span>{props.descriptionText}</span>
          )}

          <div>
            <div>
              {props.buttonLeftDescription && (
                <a href={props.buttonLeftDescriptionHref} target="_blank">
                  <ButtonLeftDescription
                    color={props.buttonLeftDescriptionColor}
                    fontSize="24px"
                  />
                </a>
              )}
              {props.buttonRightDescription && (
                <a href={props.buttonRightDescriptionHref} target="_blank">
                  <ButtonRightDescription
                    color={props.buttonRightDescriptionColor}
                    fontSize="24px"
                  />
                </a>
              )}
            </div>

            {props.buttonReadMore && descriptionVisible ? (
              <button onClick={handleDescriptionVisible}>
                See less
                <FaArrowUp />
              </button>
            ) : (
              props.buttonReadMore &&
              !descriptionVisible && (
                <button onClick={handleDescriptionVisible}>
                  View more
                  <FaArrowDown />
                </button>
              )
            )}
          </div>
        </Footer>
      ) : null}
    </Container>
  );
}

Card.defaultProps = {
  buttonLeftTitleHref: "/",
  buttonRightTitleHref: "/",
  buttonLeftDescriptionHref: "/",
  buttonRightDescriptionHref: "/",

  buttonLeftTitleColor: "#6648FF",
  buttonRightTitleColor: "#6648FF",
  buttonLeftDescriptionColor: "#6648FF",
  buttonRightDescriptionColor: "#6648FF",
};
