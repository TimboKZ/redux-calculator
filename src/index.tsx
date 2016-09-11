/**
 * @file Bootstraps React on the page
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license MIT
 * @version 0.0.1
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './App.tsx';

let root = document.getElementById('root');

ReactDOM.render(<App/>, root);