import React from "react";
import styled from "styled-components";
import logo from "../shared/Viewrail-Logo.png";

interface LogoProps {
  size: string;
}

interface CssProps {
  size: string;
}

const LogoIcon = styled.img<CssProps>`
  margin: 0;
  height: ${({ size }) => (size === "sm" ? `30px` : `80px`)};
`;

export const Logo = (props: LogoProps) => {
  const { size } = props;

  return (
    <>
      <LogoIcon src={logo} size={size} />
    </>
  );
};
