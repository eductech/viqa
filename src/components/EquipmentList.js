import React from "react";

class EquipmentList extends React.Component {
  componentDidMount() {
    this.props.sectionChange('equipment');
  }

  render() {
    return (
      <p>this is EquipmentList</p>
    );
  }
}

export default EquipmentList;