import React, { Component } from 'react';
import './index.css';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker, SingleDatePicker } from 'react-dates';
import { Label } from 'glamorous';
import { Button } from "material-ui";
 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App3">
        
          <SingleDatePicker
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            numberOfMonths={1}
            showDefaultInputIcon
          />  
        </div>
      </div>
    );
  }
}

export default App;