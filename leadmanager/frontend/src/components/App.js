import React, { Component,Fragment } from 'react'
import ReactDOM from 'react-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'

import Header from "./layout/Header";
import Dashboard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";

import { Provider } from 'react-redux';
import store from '../store';

//Alert options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}; 

export class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                <Fragment>
                    <div className="container">      
                            <Header />
                            <Alerts />
                    </div>
                        <Dashboard />
                    </Fragment>
                    </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))

export default App
