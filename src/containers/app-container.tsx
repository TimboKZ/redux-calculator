/**
 * @file Main application container
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license BSD
 * @version 0.0.1
 */

import * as React from 'react';
import {createStore} from 'redux';
import {calculator} from '../reducers/calculator';
import {add, multiply, subtract, divide} from '../actions/calculator';

/**
 * Initialising that sweet Redux store
 */
let store = createStore(calculator);

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch(add(10));
store.dispatch(multiply(5));
store.dispatch(subtract(5));
store.dispatch(divide(5));

unsubscribe();

/**
 * @class A class
 * @since 0.0.1
 */
export class AppContainer extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return <h1>Hello!</h1>;
    }

}
