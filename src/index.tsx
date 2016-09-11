/**
 * @file Bootstraps React on the page
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license MIT
 * @version 0.0.1
 */

import './styles/style.sass';
/* tslint ignore:no-unused-variable */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from './containers/app-container';

let root = document.getElementById('root');

ReactDOM.render(<AppContainer/>, root);
