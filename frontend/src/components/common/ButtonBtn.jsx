import React from "react";

import { Link } from "react-router-dom";

import "./Button.css";

const ButtonBtn = (props) => {
  if (props.href) {
    return (
      <a
        className={`bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded ${
          props.inverse && "button--inverse"
        } ${props.danger && "button--danger"}`}
        href={props.href}
      >
        {props.children}
      </a>
    );
  }
  if (props.to) {
    return (
      <Link
        to={props.to}
        exact={props.exact}
        className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={`bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded ${
        props.inverse && "button--inverse"
      } ${props.danger && "button--danger"}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );

  // return (
  //   <div>
  //     <button
  //       type="button"
  //       className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
  //     >
  //       {props.label}
  //     </button>
  //   </div>
  // );
};

export default ButtonBtn;
