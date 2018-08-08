import React from "react";

class Two extends React.Component {
  componentDidMount() {
    this.props.sectionChange('laboratory_scope');
  }

  render() {
    return (
      <p>this is two</p>
    );
  }
}

export default Two;