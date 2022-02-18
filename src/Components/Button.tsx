import React from "react";
import styled from "styled-components";
import logo from "../shared/Viewrail-Logo.png";

// interface LogoProps {
//   size: string;
// }
//
// interface CssProps {
//   size: string;
// }

const ButtonStyle = styled.button<CssProps>`
  margin: 0;
  height: ${({ size }) => (size === "sm" ? `30px` : `80px`)};
`;

export const Button = () => {
  return (
    <>
      <ButtonStyle />
    </>
  );
};
