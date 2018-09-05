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
      producer: props.equipment ? props.equipment.producer : '',
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
      this.setState(() => ({ error: 'Please provide equipment title and inventory number!' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        invNo: parseInt(this.state.invNo),
        title: this.state.title,
        factNo: (isNaN(parseInt(this.state.factNo)) ? null : parseInt(this.state.factNo)),
        description: this.state.description,
        producer: this.state.producer,
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

  onProducerChange = (e) => {
    const producer = e.target.value;
    this.setState(() => ({ producer }));
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
      <form onSubmit={this.onSubmit} className="equipment-form custom-scrollbar">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Inventory Number"
            autoFocus
            value={this.state.invNo}
            onChange={this.onInvNoChange}
          />
          <small className="form-text text-muted">Enter inventory number (required)</small>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <small className="form-text text-muted">Enter equipment title (required)</small>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Factory Number"
            value={this.state.factNo}
            onChange={this.onFactNoChange}
          />
          <small className="form-text text-muted">Enter factory number (optional)</small>
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Producer"
            value={this.state.producer}
            onChange={this.onProducerChange}
          />
          <small className="form-text text-muted">Enter producer (optional)</small>
        </div>
        <div className="form-group">
          <textarea
            placeholder="Equipment description"
            className="form-control"
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <small className="form-text text-muted">Here you can provide additional information (optional)</small>
        </div>
        <div className="form-group">
          <SingleDatePicker
            date={this.state.verificationExpires}
            onDateChange={this.onVerificationExpiresChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat="DD.MM.YYYY"
            hideKeyboardShortcutsPanel
          />
          <small className="form-text text-muted">Enter the date validation expires (optional)</small>
        </div>
        {this.state.error && <p className="text-danger">{this.state.error}</p>}
        <div>
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    );
  }
}

export default EquipmentForm;
