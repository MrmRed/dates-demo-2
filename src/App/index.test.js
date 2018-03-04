import React from 'react';
import moment from 'moment';
import './index.css';

import { storiesOf } from '@storybook/react';
import App from './';
import { SingleDatePicker } from 'react-dates'


storiesOf('SingleDateCalendar', module)
.add('SingleDateCalendar', () => <App />);

