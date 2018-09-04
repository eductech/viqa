import React from "react";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class EquipmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invNo: props.equipment ? props.equipment.invNo : '',
      title: props.equipment ? props.equipment.title : '',
      factNo: props.equipment ? props.equipment.factNo : '',
      description: props.equipment ? props.equipment.description : '',
      verificationExpires: props.equipment ? moment(props.equipment.verificationExpires) : moment(),
      calendarFocused: false,
      error: ''
    };
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.invNo || !this.state.title) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        invNo: parseInt(this.state.invNo),
        title: this.state.title,
        factNo: (isNaN(parseInt(this.state.factNo)) ? null : parseInt(this.state.factNo)),
        description: this.state.description,
        verificationExpires: this.state.verificationExpires.valueOf(),
      });
    }
  };

  onInvNoChange = (e) => {
    const invNo = e.target.value;
    if (!invNo || invNo.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ invNo }));
    }
  };

  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  onFactNoChange = (e) => {
    const factNo = e.target.value;
    if (!factNo || factNo.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ factNo }));
    }
  };

  onVerificationExpiresChange = (verificationExpires) => {
    if (verificationExpires) {
      this.setState(() => ({ verificationExpires }));
    }
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  render() { 
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <input
          type="text"
          placeholder="Inventoory Number"
          autoFocus
          value={this.state.invNo}
          onChange={this.onInvNoChange}
        />
        <input
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <input
          type="text"
          placeholder="Factory Number"
          value={this.state.factNo}
          onChange={this.onFactNoChange}
        />
        <SingleDatePicker
          date={this.state.verificationExpires}
          onDateChange={this.onVerificationExpiresChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add equipment description"
          className="textarea"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        >
        </textarea>
        <div>
          <button>Save changes</button>
        </div>
      </form>
    );
  }
}

export default EquipmentForm;
