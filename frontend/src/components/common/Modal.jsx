import React, { useCallback, useReducer, useState } from "react";
import ReactDom from "react-dom";

import Input from "./Input";
import ButtonBtn from "./ButtonBtn";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../util/validators";
// import { useForm } from "../../hooks/form-hooks";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@headlessui/react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }

        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };

    default:
      return state;
  }
};

const Modal = ({ isOpen, setIsOpen }, props) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      firstname: {
        value: "",
        isValid: false,
      },
      lastname: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback(
    (id, value, isValid) => {
      dispatch({
        type: "INPUT_CHANGE",
        value: value,
        isValid: isValid,
        inputId: id,
      });
    },
    [dispatch]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-hidden cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div
              className={`"relative z-10" ${props.className}`}
              style={props.style}
            >
              {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto"></div> */}
              <h3 className="text-3xl font-bold text-center mb-2">
                Register
                {props.header}
              </h3>
              <p className="text-center mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                aperiam vitae, sapiente ducimus eveniet in velit.
              </p>
              <form
                onSubmit={
                  props.onSubmit
                    ? props.onSubmit
                    : (event) => event.preventDefault()
                }
              >
                <div className={`modal__content ${props.contentClass}`}>
                  {props.children}
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <Input
                    element="input"
                    id="firstname"
                    type="text"
                    label="First name"
                    placeholder="First name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter your First name"
                    onInput={inputHandler}
                  />
                  <Input
                    element="input"
                    id="lastname"
                    type="text"
                    label="Last name"
                    placeholder="Last name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorText="Please enter your Last name"
                    onInput={inputHandler}
                  />
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-1">
                  <Input
                    element="input"
                    id="email"
                    type="text"
                    label="Email"
                    placeholder="johndoe@youremail.com"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email"
                    // onInput={inputHandler}
                  />
                  <Input
                    element="input"
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="L3t'sGoSomewhere!"
                    validators={[VALIDATOR_MINLENGTH(9)]}
                    errorText="Please enter a valid password, at least 9 characters."
                    // onInput={inputHandler}
                  />
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <ButtonBtn
                    type="submit"
                    label="Submit"
                    disabled={!formState.isValid}
                  />

                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    Nah, go back
                  </button>
                </div>

                <footer
                  className={`modal__footer ${props.footerClass}`}
                ></footer>
              </form>
              {/* <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Understood!
                </button>
              </div> */}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
