import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "../shared/styles";

const NavBar = styled.div`
  width: 100%;
  height: 80px;
  background: ${color.vrBlueLight};
  color: white;
  margin: 0;
`;

export function Appbar({ icon, block, ...props }) {
  return <NavBar> test</NavBar>;
}
