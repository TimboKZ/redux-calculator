/**
 * @file Contains reducers for arithmetic operations
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2016
 * @license BSD
 * @version 0.0.1
 */

import {IArithmeticAction, IAction, ADD, SUBTRACT, MULTIPLY, DIVIDE, RESET} from '../actions/calculator';

/**
 * Calculator state interface
 */
export interface ICalculatorState {
    number: number;
    history: IArithmeticAction[];
}

/**
 * Initial state for the calculator
 */
const initialCalculatorState: ICalculatorState = {
    number: 0,
    history: [],
};

/**
 * Calculator reducer
 */
export function calculator(state: ICalculatorState = initialCalculatorState, action: IAction): ICalculatorState {
    switch (action.type) {
        case ADD:
            return arithmeticReducer((x, y) => x + y);
        case SUBTRACT:
            return arithmeticReducer((x, y) => x - y);
        case MULTIPLY:
            return arithmeticReducer((x, y) => x * y);
        case DIVIDE:
            return arithmeticReducer((x, y) => x / y);
        case RESET:
            return Object.assign({}, state, initialCalculatorState);
        default:
            return state;
    }

    function arithmeticReducer(operation: (x: number, y: number) => number): ICalculatorState {
        let arithmeticAction: IArithmeticAction = action as IArithmeticAction;
        let newNumber = operation(state.number, arithmeticAction.number);
        let newHistory = [...state.history, arithmeticAction];
        return Object.assign({}, state, {
            number: newNumber,
            history: newHistory,
        });
    }
}
