import React from "react";
import PropTypes from "prop-types";
import { icons } from "../shared/icons";

export function Icon({ icon, block, ...props }) {
  return <div> {icons[icon]}</div>;
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  block: PropTypes.bool,
};

Icon.defaultProps = {
  block: false,
};
