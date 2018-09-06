import React from "react";
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, setStartDate, setEndDate } from '../actions/equipmentFiltersActions';

class EquipmentListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  render() {
    return (
      <div className="bg-white border-top equipment-filters">
        <div className="equipment-filters__date-picker">
          <p>Time period, verification will expire in:</p>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat="DD.MM.YYYY"
            hideKeyboardShortcutsPanel
          />
        </div>
        <div className="equipment-filters__search">
          <p>Equipment search:</p>
          <input
            type="text"
            placeholder="search by title"
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.equipmentFilters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentListFilters);