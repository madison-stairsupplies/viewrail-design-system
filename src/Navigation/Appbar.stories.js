import React, { Fragment } from "react";
import styled, { css } from "styled-components";

import { Appbar } from "./Appbar";

export default {
  title: "Navigation/Appbar",
  component: Appbar,
};

export const LightBlue = (args) => (
  <Fragment>
    <Appbar />
  </Fragment>
);
