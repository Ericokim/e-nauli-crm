import React from "react";
import PropTypes from "prop-types";

export const ModalHeader = ({ children, toggler }) => {
  return (
    <div className="themeSideBackground themeText mb-6 flex items-center justify-between">
      <h5 className="themeText mt-0 mb-0 text-2xl font-semibold">{children}</h5>
      <button
        className="themeText absolute top-2 right-4 bg-transparent p-1 text-3xl leading-none outline-none focus:outline-none"
        onClick={toggler}
      >
        <span className="themeText block text-3xl">&times;</span>
      </button>
    </div>
  );
};

export const ModalBody = ({ children }) => {
  return <div className=" mb-6">{children}</div>;
};

export const ModalFooter = ({ children }) => {
  return <div className="flex items-center justify-end gap-4">{children}</div>;
};

export const Modal = ({ children, size, active, toggler }) => {
  let modalSize;

  if (size === "sm") {
    modalSize = "max-w-sm";
  } else if (size === "lg") {
    modalSize = "max-w-6xl";
  } else {
    modalSize = "max-w-3xl";
  }

  return (
    <>
      <div
        className={`${
          active
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } fixed inset-0 z-50 grid place-items-center overflow-y-auto overflow-x-hidden outline-none transition-all duration-500 focus:outline-none `}
        onClick={toggler}
      >
        <div
          className={`transform px-2 ${
            active ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          } my-6 mx-auto w-screen ${modalSize} transition-all duration-500`}
        >
          <div
            className={`border-0 p-6 ${
              size === "lg" ? "rounded-xl shadow-xl" : "rounded-lg shadow-lg"
            } ring-color themeSideBackground themeText flex w-full flex-col bg-white outline-none ring-1 focus:outline-none`}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
      <div
        className={`${
          active
            ? "pointer-events-auto opacity-25"
            : "pointer-events-none opacity-0"
        } fixed inset-0 z-40 bg-black transition-all duration-500`}
      />
    </>
  );
};

Modal.defaultProps = {
  size: "regular",
};
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  toggler: PropTypes.func.isRequired,
};
ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
  toggler: PropTypes.func.isRequired,
};
ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
};
ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
};
