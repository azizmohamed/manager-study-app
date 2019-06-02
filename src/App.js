import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount(){
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyDMKPBy0xYkSOUU1_ZBoCYRtM3wPjyiVQM",
            authDomain: "manager-11619.firebaseapp.com",
            databaseURL: "https://manager-11619.firebaseio.com",
            projectId: "manager-11619",
            storageBucket: "manager-11619.appspot.com",
            messagingSenderId: "512140823048",
            appId: "1:512140823048:web:942722ba957385a0"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={ store }>
               <Router />
            </Provider>
        );
    }
}

export default App;