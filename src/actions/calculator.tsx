/**
 * @file File containing arithmetic operations for the calculator
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license BSD
 * @version 0.0.1
 */

/**
 * Action types
 */
export const ADD = 'ADDITION';
export const SUBTRACT = 'SUBTRACT';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';
export const RESET = 'RESET';

/**
 * Default action interface
 */
export interface IAction {
    type: string;
    [key: string]: any;
}

/**
 * Arithmetic action interface
 */
export interface IArithmeticAction extends IAction {
    number: number;
}

/**
 * Action creators
 */
export function add(num: number): IArithmeticAction {
    return {
        type: ADD,
        number: num,
    };
}
export function subtract(num: number): IArithmeticAction {
    return {
        type: SUBTRACT,
        number: num,
    };
}
export function multiply(num: number): IArithmeticAction {
    return {
        type: MULTIPLY,
        number: num,
    };
}
export function divide(num: number): IArithmeticAction {
    return {
        type: DIVIDE,
        number: num,
    };
}

export function reset(): IAction {
    return {
        type: RESET,
    };
}
