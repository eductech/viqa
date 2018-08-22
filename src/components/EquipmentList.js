import React from "react";
import { connect } from 'react-redux';
import { changeLastOpenedList } from "../actions/sessionSettingsActions";

class EquipmentList extends React.Component {
  componentDidMount() {
    this.props.changeLastOpenedList();
  }

  render() {
    return (
      <div>
        <p>this is EquipmentList</p>
        <ul>
          {this.props.equipment.map((i) =>{
            return (
              <li>{i.title}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    equipment: state.equipment
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLastOpenedList: () => dispatch(changeLastOpenedList('equipment'))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentList);
