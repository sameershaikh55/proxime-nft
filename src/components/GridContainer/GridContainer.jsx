import React from "react";
import clsx from "clsx";

const GridContainer = ({ rowClassName, rootClassName, children, ...rest }) => {
  return (
    <div className={clsx(rootClassName, "container-fluid px-0")} {...rest}>
      <div className={clsx(rowClassName, "row")}>{children}</div>
    </div>
  );
};

export default GridContainer;
