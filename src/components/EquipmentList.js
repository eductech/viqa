import React from "react";
import { connect } from 'react-redux';
import EquipmentListItem from './EquipmentListItem';

const EquipmentList = (props) => (
  <div className="equipment-list custom-scrollbar">
    {
      props.equipment.length === 0 ? (
        <div>
          <span>your equipment data is empty</span>
        </div>
      ) : (
        props.equipment.map((equipment) => {
          return <EquipmentListItem key={equipment.id} {...equipment} />;
        })
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    equipment: state.equipment
  }
};

export default connect(mapStateToProps)(EquipmentList);