import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Playerlist from './Players/Playerlist';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';

// let initState = {
//     count: 0
// }

// let rootReducer = function (state = initState, action) {//initState is default parameter
//     switch (action.type) {
//         case 'INCREMENT':
//             return {
//                 count: state.count + 1
//             }
//         case 'DECREMENT':
//             return {
//                 count: state.count - 1
//             }
//         case 'ADD':
//             return {
//                 count: state.count + action.value
//             }
        //     if(action.type=='INCREMENT'){
        //         return {
        //             count : state.count + 1
        //         }
        //     }
        //     if(action.type=='DECREMENT'){
        //         return {
        //             count : state.count - 1
        //         }
        //     }
        //     if(action.type =='ADD'){
        // return {
        //     count : state.count + action.value
        // }
//     }

//     return state;
// }
import employeeReducer from './store/employee.reducer';
let store = createStore(employeeReducer);
ReactDOM.render(<Provider store={store}><Employee/></Provider>)


// var store = createStore(rootReducer);

// const store = createStore(rootReducer);//takes reducer as input
// ReactDOM.render(<Provider store={store}><Counter /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
