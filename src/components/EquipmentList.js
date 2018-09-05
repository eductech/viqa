import React from "react";
import { connect } from 'react-redux';
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Modal from "./Modal";
import EquipmentForm from "./EquipmentForm";
import EquipmentListItem from './EquipmentListItem';
import selecteEquipment from "../selectors/equipmentSelector";
import { 
  sortByFactNo, 
  sortByInvNo, 
  sortByProducer, 
  sortByTitle, 
  sortByVerificationExpires
} from "../actions/equipmentFiltersActions";
import { 
  startAddEquipment,
  startEditEquipment,
  startRemoveEquipment
} from "../actions/equipmentActions";

class EquipmentList extends React.Component {
  state = {
    authModalVisible: false
  }

  componentDidMount() {
    $(function() { 
      $('.equipment-list__header').on('click','div', function ( e ) {
          e.preventDefault();
          $(this).parents('.equipment-list__header').find('.sorted-by').removeClass('sorted-by').end().end().addClass('sorted-by');
        });
    });
  }

  onAuthModalClose = () => {
    this.setState({authModalVisible: false, selectedEquipmentId: undefined});
  }

  onEquipmentListItemClick = (selectedEquipmentId) => {
    this.setState({authModalVisible: true, selectedEquipmentId});
  }

  onAddButtonClick = () => {
    this.setState({authModalVisible: true});
  }

  onSubmit = (equipment) => {
    if (this.state.selectedEquipmentId) {
      this.props.startEditEquipment(this.state.selectedEquipmentId, equipment)
    } else {
      this.props.startAddEquipment(equipment)
    }
    this.onAuthModalClose();
  };

  render() {
    const equipment = this.props.equipment.find(
      (equipment) => equipment.id === this.state.selectedEquipmentId
    );

    return (
      <div className="equipment-list">
        <div className="py-3 border-bottom equipment-list__header">
          <div onClick={this.props.sortByInvNo} className="sorted-by">Inventory Number</div>
          <div onClick={this.props.sortByTitle}>Title</div>
          <div onClick={this.props.sortByFactNo}>Factory Number</div>
          <div onClick={this.props.sortByProducer}>Producer</div>
          <div onClick={this.props.sortByVerificationExpires}>Verification Expires</div>
        </div>
        <div className="equipment-list__body custom-scrollbar">
          {
            this.props.equipment.length === 0 ? (
              <div className="mx-3">
                <span>your equipment data is empty</span>
              </div>
            ) : (
              this.props.equipment.map((equipment) => {
                return (
                  <EquipmentListItem 
                    key={equipment.id} 
                    {...equipment} 
                    onItemClick={this.onEquipmentListItemClick}
                  />
                );
              })
            )
          }
        </div>
        <button 
          className="shadow-sm equipment-list__add-btn" 
          title="add"
          onClick={this.onAddButtonClick}
        > 
          <FontAwesomeIcon icon={faPlus}/>
        </button>
        <Modal
          authModalVisible={this.state.authModalVisible}
          onAuthModalClose={this.onAuthModalClose}
          contentComponent={EquipmentForm}
          contentComponentProps={{equipment, onSubmit: this.onSubmit}}
        />
      </div>
    )
  };
};

const mapStateToProps = (state) => {
  return {
    equipment: selecteEquipment(state.equipment, state.equipmentFilters)
  }
};

const dispatchStateToProps = (dispatch) => {
  return {
    sortByFactNo: () => dispatch(sortByFactNo()),
    sortByInvNo: () => dispatch(sortByInvNo()), 
    sortByProducer: () => dispatch(sortByProducer()), 
    sortByTitle: () => dispatch(sortByTitle()), 
    sortByVerificationExpires: () => dispatch(sortByVerificationExpires()),
    startAddEquipment: (equipment) => dispatch(startAddEquipment(equipment)),
    startEditEquipment: (id, equipment) => dispatch(startEditEquipment(id, equipment)),
    startRemoveEquipment: (data) => dispatch(startRemoveEquipment(data)) 
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(EquipmentList);
