import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@headlessui/react";

const Modal = (props) => {
  // console.log(`props from Modal ${props}`);

  const { isOpen, setIsOpen } = props;

  return (
    <React.Fragment>
      {isOpen}
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
              <ModalOverlay {...props} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

const ModalOverlay = (props) => {
  // console.log(`props from ModalOverlay ${props}`);

  return (
    <div className={`"relative z-10" ${props.className}`} style={props.style}>
      <h3 className="text-3xl font-bold text-center mb-2">{props.header}</h3>
      <p className="text-center mb-6">{props.desc}</p>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className={`modal__content ${props.contentClass}`}>
          {props.children}
        </div>

        <footer className="container py-2 mx-0 min-w-full flex flex-col items-center">
          {props.footer}
        </footer>
      </form>
    </div>
  );
};

export default Modal;
