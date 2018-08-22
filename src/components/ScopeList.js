import React from "react";
import { connect } from "react-redux";
import { changeLastOpenedList } from "../actions/sessionSettingsActions";

class ScopeList extends React.Component {
  componentDidMount() {
    this.props.changeLastOpenedList();
  }

  render() {
    return (
      <p>this is ScopeList</p>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLastOpenedList: () => dispatch(changeLastOpenedList('scope'))
  };
}

export default connect(undefined, mapDispatchToProps)(ScopeList);