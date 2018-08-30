import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import AuthorizationComponent from "./AuthorizationComponent";

const AuthorizationModal = (props) => {
  return ( 
    <Modal
      isOpen={props.authModalVisible}
      contentLabel="Authorization Modal"
      onRequestClose={props.onAuthModalClose}
      closeTimeoutMS={200}
      className="authorization-modal"
      ariaHideApp={false}
    >
      <button 
        onClick={props.onAuthModalClose} 
        className="authorization-modal__btn-close btn btn-link btn-lg"
      >
        <FontAwesomeIcon icon={faTimes} className=""/>
      </button>
      <AuthorizationComponent />
    </Modal>
  )
};

export default AuthorizationModal;