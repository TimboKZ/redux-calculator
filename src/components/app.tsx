/**
 * @file A TypeScript JSX Harmony file.
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license BSD
 * @version 0.0.1
 */

import '../styles/style.sass';
import * as React from 'react';

/**
 * @class A class
 * @since 0.0.1
 */
export class App extends React.Component<{}, {}> {

    public render(): JSX.Element {
        return <div className="wrapper">
            <div className="tabs"></div>
            <div className="number">0.1134</div>
            <div className="controls">
                <a href="#" className="controls-button">9</a>
                <a href="#" className="controls-button">8</a>
                <a href="#" className="controls-button">7</a>
                <a href="#" className="controls-button">+</a>
                <a href="#" className="controls-button">*</a>
                <a href="#" className="controls-button">6</a>
                <a href="#" className="controls-button">5</a>
                <a href="#" className="controls-button">4</a>
                <a href="#" className="controls-button">-</a>
                <a href="#" className="controls-button">/</a>
                <a href="#" className="controls-button">3</a>
                <a href="#" className="controls-button">2</a>
                <a href="#" className="controls-button">1</a>
                <a href="#" className="controls-button">0</a>
                <a href="#" className="controls-button">C</a>
            </div>
        </div>;
    }

}
