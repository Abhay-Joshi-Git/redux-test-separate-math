import * as Redux from 'redux';
import { reducer } from './modules/issues.js';

const initialState = [
    {
        id: 'S1',
        summary: 'test issue 1'
    }
]

const store = Redux.createStore(
    reducer,
    initialState
)

export default store;
