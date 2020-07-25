import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import { persistState } from 'redux-devtools'
// import { createStore, applyMiddleware } from 'redux'

import rootReducer from "./reducers"
// export default createStore(
//     reducers, {}, applyMiddleware(thunk)
// );

export default function configureAppStore(preloadedState = {}) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware(),
        preloadedState
    })
    // store.subscribe(throttle(() => {
    //   saveState(store.getState());
    // }, 1000));
    // if (process.env.NODE_ENV !== 'production' && module.hot) {
    //     module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
    // }
    return store
}