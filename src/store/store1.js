import { createStore } from 'redux';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log('incre', state + 1)
            return state + 1
        case 'DECREMENT':
            console.log('de', state - 1)
            return state + 1
        default:
            return state
    }
}

const counterStore = createStore(counterReducer)

counterStore.dispatch({ type: 'INCREMENT' })

counterStore.dispatch({ type: 'INCREMENT' })

counterStore.dispatch({ type: 'INCREMENT' })

counterStore.dispatch({ type: 'DECREMENT' })