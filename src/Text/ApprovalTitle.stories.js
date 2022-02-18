import React, { Fragment } from "react";
import styled, { css } from "styled-components";

import { ApprovalTitle } from "./ApprovalTitle";

export default {
  title: "Text/ApprovalTitle",
  component: ApprovalTitle,
};

export const Header = (args) => (
  <Fragment>
    <ApprovalTitle />
  </Fragment>
);
