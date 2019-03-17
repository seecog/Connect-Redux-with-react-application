var redux = require('redux');


const currentState = {
    count : 0
}

const rootReducer = function(state=currentState,action){
    if(action.type=='inc'){
        state.count = state.count+1;
    }
    if(action.type=='add'){
        state.count = state.count+action.value;
    }
return state;
}

var store = redux.createStore(rootReducer); 


console.log('The current state is ',store.getState());

//Dispatch action
store.dispatch({type : "inc"});
console.log('The current state is ',store.getState());
store.dispatch({type : 'add',value : 50})
console.log('The current state is ',store.getState());