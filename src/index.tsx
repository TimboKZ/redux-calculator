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
import {createStore} from 'redux';
import {calculator} from 'reducers/calculator';
import {Provider} from 'react-redux';
import {App} from 'components/app';
import * as ReactDOM from 'react-dom';

/**
 * Initialising that sweet Redux store and getting the root element for React
 */
let store = createStore(calculator);
let root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    root
);
