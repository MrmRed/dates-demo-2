import React from 'react';
import moment from 'moment';
import './index.css';

import { storiesOf } from '@storybook/react';
import App from './';
import { Dropdown } from 'semantic-ui-react'

const stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' } ];

storiesOf('Dropdown', module)
.add('Dropdown', () => <Dropdown placeholder='State' search selection options={stateOptions} />);

