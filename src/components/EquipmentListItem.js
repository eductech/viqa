import React from 'react';
import moment from 'moment';

const EquipmentListItem = ({
  title, 
  invNo, 
  factNo, 
  producer, 
  verificationExpires
}) => {
  return (
    <div className="py-2 border-bottom equipment-list-item">
      <div>{invNo}</div>
      <div>{title}</div>
      <div>{factNo}</div>
      <div>{producer}</div>
      <div>{moment(verificationExpires).format('DD.MM.YYYY')}</div>
    </div>
  )
}

export default EquipmentListItem;
