/**
 * @file Contains interface/classes for the app container
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license BSD
 * @version 0.0.1
 */

import './App.sass';
import * as React from 'react';

/**
 * @class App container class
 * @since 0.0.1
 */
export class App extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return <h1>
            <em>Hello</em>
            {` `}
            <span>World</span>
        </h1>;
    }

}
