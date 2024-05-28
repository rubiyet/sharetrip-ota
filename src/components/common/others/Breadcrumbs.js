import React from "react";
import { Breadcrumbs } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const CustomBreadcrumbs = ({ breadcrumbs }) => (
  <Breadcrumbs
    separator={<NavigateNextIcon fontSize="small" />}
    className="text-color-200 text-[13px]"
  >
    {breadcrumbs}
  </Breadcrumbs>
);

export default CustomBreadcrumbs;
