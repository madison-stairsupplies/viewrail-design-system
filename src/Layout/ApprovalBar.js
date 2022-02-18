import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { boxShadow, color } from "../shared/styles";

const Bar = styled.div`
  width: 25vw;
  height: calc(100vh - 210px);
  background: ${color.lightGray};
  box-shadow: ${boxShadow.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: auto;
  padding: 1rem 20px;

  @media (max-width: 800px) {
    background: none;
    width: 95vw;
  }
`;

export function ApprovalBar({ icon, block, ...props }) {
  return (
    <Bar>
      <div>
        testing a long sentence to figure out padding and actually i need a
        little more workd
      </div>
      <div>submit</div>
    </Bar>
  );
}
