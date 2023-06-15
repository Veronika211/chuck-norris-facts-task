import React from "react";
import { FilledButton, OutlinedButton } from "./Button.styles";

const Button = ({ width, height, onClick, children, type }) => {
  const getButtonType = (type) => {
    switch (type) {
      case "filled":
      default:
        return FilledButton;
      case "outlined":
        return OutlinedButton;
    }
  };

  const ButtonComponent = getButtonType(type);
  return (
    <ButtonComponent width={width} height={height} onClick={onClick}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
