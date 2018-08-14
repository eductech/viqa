import React from "react";
import { connect } from 'react-redux';

class EquipmentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.sectionChange('equipment');
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

export default connect(mapStateToProps)(EquipmentList);
