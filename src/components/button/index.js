import React from "react";
import PropTypes from "prop-types";
import { DefaultButton, IconHolder } from "./styles";

const Button = ({
  bg,
  icon,
  iconColour,
  fullWidth,
  type = "button",
  children,
  className,
  disabled,
  onClick
}) => (
  <DefaultButton
    bg={bg}
    className={className}
    fullWidth={fullWidth}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {icon && <IconHolder src={icon} iconColour={iconColour} cacheGetRequests />}
    {children}
  </DefaultButton>
);

Button.propTypes = {
  /** Sets the background color. Can be 'red', 'black', 'blue', 'donate', 'white-outline' */
  bg: PropTypes.string.isRequired,
  /** The icon SVG */
  icon: PropTypes.string,
  iconColour: PropTypes.string,
  /** HTML button attribute – can be "button", "submit" or "reset" */
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};

/** @component */
export default Button;
