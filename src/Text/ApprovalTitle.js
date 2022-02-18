import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color } from "../shared/styles";

const Title = styled.div`
  font-size: 2rem;
  color: ${color.vrBlue};
  font-weight: bold;
  text-transform: uppercase;
`;

export function ApprovalTitle({ icon, block, ...props }) {
  return <Title> approval Title</Title>;
}
