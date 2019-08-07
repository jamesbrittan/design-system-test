import styled from "styled-components";
import SVG from "react-inlinesvg";
import { buttonStyles } from "../styled/buttons";

/** @component */
export const DefaultButton = styled.button`
  ${buttonStyles};
`;

/** @component */
export const IconHolder = styled(SVG)`
  fill: ${({ iconColour, theme }) =>
    (iconColour === "black" && theme.palette.black) || theme.palette.white};

  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: top;
  margin-top: -2px;
`;
