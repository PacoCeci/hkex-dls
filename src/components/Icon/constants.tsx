import PropTypes from "prop-types";
import { HTMLAttributes } from "react";

export const defaultProps = {
  size: "1em",
  color: "currentColor",
};

export const propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export interface ISvgProps extends HTMLAttributes<SVGElement> {
  size?: string;
  color?: string;
}
