import React, { Component,Fragment } from 'react'
import ReactDOM from 'react-dom';

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";

import { Provider } from 'react-redux';
import store from '../store';

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <div className="container">      
                        <Header />
                    </div>
                        <Dashboard />
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App
