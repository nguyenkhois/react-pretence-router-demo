import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// Using for router - do not change anything
import { Route, routerReducers as router } from 'react-pretence-router';

// Importing your React components
import { Menu } from './menu';
import { Home } from './components/home';
import { About } from './components/about';

// Importing your React-Redux components
import { timestampReducer } from './components/timestamp';
import { TimeStamp } from './components/timestamp';

// Step 1 - Must have - main state must be an object
const preloadedState = {};

// Step 2 - Combine your reducers with router reducers
const rootReducer = combineReducers({
    router, // Using for router - must have and do not change its name
    timestampReducer, // Your reducers here
});

const store = createStore(rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Step 4 - Export your app
const App = () => (
    <Provider store={store}>
        <div>
            <Menu/>
            <Route path={'/'} component={Home}/>
            <Route path={'/about'} component={About}/>
            <Route path={'/timestamp'} component={TimeStamp}/>
        </div>
    </Provider>
)
export default App;
