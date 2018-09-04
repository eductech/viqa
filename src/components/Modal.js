import React from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  const ContentComponent = props.contentComponent;

  return ( 
    <ReactModal
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
      <ContentComponent {...props.contentComponentProps}/>
    </ReactModal>
  )
};

export default Modal;