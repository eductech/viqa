import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentListItem = ({title, invNo}) => {
  return (
    <div>
      <p>{title}</p>
      <p>{invNo}</p>
    </div>
  )
}

export default EquipmentListItem;
