import React from 'react';
import moment from 'moment';

const EquipmentListItem = (props) => {
  return (
    <div 
      className="py-2 border-bottom equipment-list-item" 
      onClick={() => props.onItemClick(props.id)}
    >
      <div>{props.invNo}</div>
      <div>{props.title}</div>
      <div>{props.factNo}</div>
      <div>{props.producer}</div>
      <div>{moment(props.verificationExpires).format('DD.MM.YYYY')}</div>
    </div>
  )
}

export default EquipmentListItem;
