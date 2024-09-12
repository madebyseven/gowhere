import React, { useCallback, useReducer, useState } from "react";

import Input from "../../components/common/Input";
import ButtonBtn from "../../components/common/ButtonBtn";
import Modal from "../../components/common/Modal";

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../util/validators";
// import { useForm } from "../../hooks/form-hooks";

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

const Register = (props) => {
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
    <React.Fragment>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
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
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid password, at least 5 characters."
            // onInput={inputHandler}
          />
        </div>
        {/* <div className="grid gap-6 mb-6 md:grid-cols-2">
          <ButtonBtn type="submit" label="Submit" disabled={!formState.isValid}>
            Submit
          </ButtonBtn>

          <button
            onClick={() => setIsOpen(false)}
            className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
          >
            Nah, go back
          </button>
        </div> */}
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
    </React.Fragment>
  );
};

export default Register;
