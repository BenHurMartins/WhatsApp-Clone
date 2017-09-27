import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Routes from './Routes';


class App extends Component {

    componentWillMount(){
        var config = {
            apiKey: "AIzaSyAAOa-WESnGGA4lhl-mpvjH_DVIOhM20lI",
            authDomain: "whatsapp-clone-25386.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-25386.firebaseio.com",
            projectId: "whatsapp-clone-25386",
            storageBucket: "whatsapp-clone-25386.appspot.com",
            messagingSenderId: "599724105115"
        };
        firebase.initializeApp(config);
    }

    render(){
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes/>
            </Provider>
        );
    }
}

export default App;
