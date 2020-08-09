import {createStore, combineReducers} from 'redux'
import numberValue from './reducers/numberValue';

const reducers = combineReducers({
    numberValue: numberValue
})


export default function storeConfig() {
    return createStore(reducers)
}
