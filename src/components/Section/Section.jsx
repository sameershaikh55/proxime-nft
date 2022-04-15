import React from "react";
import clsx from "clsx";

const Section = ({ className, rootClassName, children, ...props }) => {
  return (
    <div {...props} className={clsx(rootClassName, "section")}>
      <div className={clsx(className, "page-container")}>{children}</div>
    </div>
  );
};

export default Section;
