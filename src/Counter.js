import React,{Component} from 'react';
import {connect} from 'react-redux';
class Counter extends Component{
constructor(){
    super();

}
render(){
    return (
        <div>
<h2>The count is {this.props.counter}</h2>
<button onClick={this.props.onIncrement}>Increment ++</button> | 
<button onClick={this.props.onDecrement}>Decrement --</button> | 
<button onClick={this.props.onAdd}>Add </button> 
        </div>
    )
}

}

let mapStateToProps = state =>{//here state refers to redux state
return {
    counter : state.count
}
}

let mapDispatchtoProps = dispatch => {//dispatch is function od redux store
    return {
        onIncrement : ()=>dispatch({type : 'INCREMENT'}),
        onDecrement : ()=>dispatch({type : 'DECREMENT'}),
        onAdd : ()=> dispatch({type : 'ADD',value : 10})
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Counter);