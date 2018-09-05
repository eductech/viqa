import React from 'react';
import moment from 'moment';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { startRemoveEquipment } from "../actions/equipmentActions";

const EquipmentListItem = (props) => {
  return (
    <div 
      className="py-2 border-bottom equipment-list-item" 
    >
      <button 
        className="equipment-list-item__btn-remove" 
        onClick={() => props.startRemoveEquipment({id: props.id})} 
        title="remove" 
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      <div className="equipment-list-item__row" onClick={() => props.onItemClick(props.id)}>
        <div>{props.invNo}</div>
        <div>{props.title}</div>
        <div>{props.factNo}</div>
        <div>{props.producer}</div>
        <div>{moment(props.verificationExpires).format('DD.MM.YYYY')}</div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    startRemoveEquipment: (data) => dispatch(startRemoveEquipment(data))
  }
}

export default connect(undefined, mapDispatchToProps)(EquipmentListItem);
