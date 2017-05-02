import React from 'react'
import { render } from 'react-dom'
import {Router, Route, IndexRedirect, Redirect, hashHistory, IndexRoute} from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import Immutable from 'immutable'
import reducer from './reducers'
import HomePageContainer from '../home-page/containers/HomePageContainer'
import thunkMiddleware from 'redux-thunk'

class NotFound extends React.Component {
    render() {
        return (
            <div>
                404 Not Found in carousell code challenge.
            </div>
        );
    }
}

/*let store = createStore(reducer, initialState);*/
let store = createStore(reducer, Immutable.fromJS({}), compose(
    applyMiddleware(thunkMiddleware),
));

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={HomePageContainer} />
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404" />
        </Router>
    </Provider>,
    document.getElementById('root')
)