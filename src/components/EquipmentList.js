import React from "react";
import { connect } from 'react-redux';
import $ from "jquery";
import EquipmentListItem from './EquipmentListItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class EquipmentList extends React.Component {
  componentDidMount() {
    $(function() { 
      $('.equipment-list__header').on('click','div', function ( e ) {
          e.preventDefault();
          $(this).parents('.equipment-list__header').find('.sorted-by').removeClass('sorted-by').end().end().addClass('sorted-by');
        });
    });
  }

  render() {
    return (
      <div className="equipment-list">
        <div className="py-3 border-bottom equipment-list__header">
          <div className="sorted-by">Inv.No</div>
          <div>Title</div>
          <div>Fact.No</div>
          <div>Producer</div>
          <div>Verification Expires</div>
        </div>
        <div className="equipment-list__body custom-scrollbar">
          {
            this.props.equipment.length === 0 ? (
              <div className="mx-3">
                <span>your equipment data is empty</span>
              </div>
            ) : (
              this.props.equipment.map((equipment) => {
                return <EquipmentListItem key={equipment.id} {...equipment} />;
              })
            )
          }
        </div>
        <button className="shadow-sm equipment-list__add-btn" title="add"> 
          <FontAwesomeIcon icon={faPlus}/>
        </button>
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    equipment: state.equipment
  }
};

export default connect(mapStateToProps)(EquipmentList);