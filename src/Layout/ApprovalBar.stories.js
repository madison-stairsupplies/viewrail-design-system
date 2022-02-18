import React, { Fragment } from "react";

import { ApprovalBar } from "./ApprovalBar";

export default {
  title: "Layout/ApprovalBar",
  component: ApprovalBar,
};

export const BarLayout = () => (
  <Fragment>
    <ApprovalBar />
  </Fragment>
);

export const MobileLayout = () => (
  <Fragment>
    <ApprovalBar />
  </Fragment>
);
