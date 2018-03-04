import React from 'react';
import moment from 'moment';
import './index.css';

import { storiesOf } from '@storybook/react';
import App from './';
import { SingleDatePicker } from 'react-dates'


storiesOf('TwoDates', module)
.add('TwoDates', () => <App />);

storiesOf('SDP - Input Props', module)
.add('with show calendar icon', () => (
    <SingleDatePicker
      initialDate={moment().add(3, 'days')}
      showDefaultInputIcon
    />
  ))