import React from "react";
import { connect } from 'react-redux';
import EquipmentListItem from './EquipmentListItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const EquipmentList = (props) => (
  <div className="equipment-list">
    <div className="p-3 border-bottom equipment-list__header">
      <div>Inv.No</div>
      <div>Title</div>
      <div>Fact.No</div>
      <div>Producer</div>
      <div>Verification Expires</div>
    </div>
    <div className="equipment-list__body custom-scrollbar">
      {
        props.equipment.length === 0 ? (
          <div className="mx-3">
            <span>your equipment data is empty</span>
          </div>
        ) : (
          props.equipment.map((equipment) => {
            return <EquipmentListItem key={equipment.id} {...equipment} />;
          })
        )
      }
    </div>
    <button className="equipment-list__add-btn" title="add"> 
      <FontAwesomeIcon icon={faPlus}/>
    </button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    equipment: state.equipment
  }
};

export default connect(mapStateToProps)(EquipmentList);