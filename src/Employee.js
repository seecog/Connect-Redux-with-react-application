import React,{Component} from 'react';
import { connect } from 'react-redux';

class Employee extends Component{

    constructor(){
        super();

    }
    render(){
        return (
            <div>


            </div>
        )
    }

}
// let mapStateToProps = state = {
//     return {
//         // employee : stat.emp
//     }
// }

export default connect()(Employee);