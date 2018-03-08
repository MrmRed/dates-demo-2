import React, { Component } from 'react';
import './index.css';
import moment from 'moment'

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { SingleDatePicker } from 'react-dates';
import DropdownTest from '../Menu';


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
    const stateOptions = [  
      { value: 'all', text: 'All' },
      { value: 'articles', text: 'Articles' },
      { value: 'products', text: 'Products' },
    ];
    return (
      <div className="App">
        <div className="App3">
        
          <SingleDatePicker
            date={this.state.date} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={this.state.focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            numberOfMonths={1}
            placeholder={moment().format("MM/DD/YYYY")}
            showDefaultInputIcon
          />  
          <DropdownTest placeholder='State' search selection options={stateOptions} />
        </div>
      </div>
    );
  }
}

export default App;