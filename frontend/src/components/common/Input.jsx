import React, { useReducer, useEffect } from "react";

import { validate } from "../../util/validators";

// const inputReducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE":
//       return {
//         ...state,
//         value: action.val,
//         isValid: validate(action.val, action.validators),
//       };
//     case "TOUCH":
//       return {
//         ...state,
//         isTouched: true,
//       };
//     default:
//       return state;
//   }
// };

const Input = (props) => {
  //   const [inputState, dispatch] = useReducer(inputReducer, {
  //     value: props.initialValue || "",
  //     isTouched: false,
  //     isValid: props.initialValid || false,
  //   });

  //   const { id, onInput } = props;
  //   const { value, isValid } = inputState;

  //   useEffect(() => {
  //     onInput(id, value, isValid);
  //   }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  //   const touchHandler = () => {
  //     dispatch({
  //       type: "TOUCH",
  //     });
  //   };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 light:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={changeHandler}
        // onBlur={touchHandler}
        // value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        placeholder={props.placeholder}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={changeHandler}
        // onBlur={touchHandler}
        // value={inputState.value}
      />
    );

  return (
    <div>
      <label
        htmlFor={props.id}
        className=" text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      {element}
      {/* {!inputState.isValid && inputState.isTouched && (
        <p className="text-left text-gray-50">{props.errorText}</p>
      )} */}
    </div>
  );
};

export default Input;
