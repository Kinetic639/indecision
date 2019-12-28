import React from "react";
import Modal from "react-modal";

export default function OptionModal(props) {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose={props.okClick}
    >
      <h3>Selected option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.okClick}>OK</button>
    </Modal>
  );
}
