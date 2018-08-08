import React from "react";

class One extends React.Component {
  componentDidMount() {
    this.props.sectionChange('laboratory_equipment');
  }

  render() {
    return (
      <p>this is one</p>
    );
  }
}

export default One;