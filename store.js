import * as Redux from 'redux';
import { reducer } from './modules/issues.js';

const initialState = [
    {
        id: 'S1',
        summary: 'test issue 1'
    },
    {
        id: 'S2',
        summary: 'test issue 2'
    },
    {
        id: 'S3',
        summary: 'test issue 3'
    }
]

const store = Redux.createStore(
    reducer,
    initialState
)

export default store;
