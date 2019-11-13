import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import AppRouter, { history } from "./routers/AppRouter"
import { login , logout } from "./actions/auth"
import configureStore from "./store/configureStore"
import { firebase } from "./firebase/firebase";

import Loading from "./components/Loading"

import "./styles/style.scss"
import "normalize.css/normalize.css"
import 'react-dates/lib/css/_datepicker.css';

let hasRenderd = false
const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

const renderApp = () => {
    if ( !hasRenderd ) {
        ReactDOM.render( jsx, document.getElementById( 'app' ) );
        hasRenderd = true
    }
}

ReactDOM.render( <Loading/>, document.getElementById( 'app' ) );



firebase.auth().onAuthStateChanged( ( user ) => {
    if ( user ) {
        store.dispatch(login(user.uid))
        renderApp()
        if ( history.location.pathname === "/" ) {
            history.push( "./dashboard" )
        }
    } else {
        store.dispatch(logout())
        renderApp()
        history.push( "./" )
    }
} )