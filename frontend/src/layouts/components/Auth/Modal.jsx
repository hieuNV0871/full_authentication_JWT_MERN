import React from "react";
import PropTypes from "prop-types";

import { XIcon } from "../../../components/Icon/Icon";


const Modal = ({onClose, children}) => {
  return (
    <div className="z-[9999] fixed overflow-auto outline-none flex inset-0 animate-getDarker transition">
      <div className="fixed inset-0 bg-black/50"></div>
      <div className="rounded-lg m-auto relative h-4/5 bg-white overflow-hidden w-[483px] max-h-[693px] animate-growUp transition-transform">
        <div className="relative h-full pt-12 flex flex-col">
          <div
            className="absolute top-5 right-5 rounded-full cursor-pointer flex justify-center items-center bg-black/5 w-10 h-10"
            onClick={onClose}
          >
            <XIcon className={"w-6 h-6 text-black/30"}/>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func
};

export default Modal ;
