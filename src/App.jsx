import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navigation } from './components';

import {
    Home,
} from './pages';

const App = () => {
    return (
        <div className="App">
            <Navigation />
            <Switch>
                <Route  path="/" component={Home} />
                <Route component={() => 404} />
            </Switch>
        </div>
    );
}

export default App;
