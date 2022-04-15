import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import $ from "jquery";

const Accordion = ({ className, bodyClassName, icon, title, children }) => {
  const rootRef = useRef(null);
  const headRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const $root = $(rootRef.current);
    const $head = $(headRef.current);
    const $body = $(bodyRef.current);

    $head.click(function () {
      $root.toggleClass("opened");
      $body.slideToggle();
    });
  }, []);

  return (
    <div ref={rootRef} className={clsx("accordion-root", className)}>
      <div ref={headRef} className="accordion-head">
        {" "}
        <div className="accordion-head__left">
          {icon && (
            <img className="accordion-head__icon" src={icon} alt="icon" />
          )}
          {title}
        </div>
        <div className="accordion-head__right">
          <img
            className="accordion-head__arrow"
            src="/assets/vectors/select-arrow.svg"
            alt="arrow"
          />
        </div>
      </div>
      <div
        ref={bodyRef}
        className={clsx("accordion-body", bodyClassName)}
        style={{ display: "none" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
