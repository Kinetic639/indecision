import React from "react";
import Modal from "react-modal";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

export default function OptionModal(props) {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose={props.okClick}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected option</h3>
      {props.selectedOption && (
        <p className="modal__body">{props.selectedOption}</p>
      )}
      <button className="button" onClick={props.okClick}>
        OK
      </button>
    </Modal>
  );
}
