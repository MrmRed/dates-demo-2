import React from 'react';

import './index.css';

import { storiesOf } from '@storybook/react';
import App from './';

storiesOf('TwoDates', module)
.add('TwoDates', () => <App />);
