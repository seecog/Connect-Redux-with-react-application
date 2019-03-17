import React,{Component} from 'react';
import axios from 'axios';
class Employees extends Component{

    constructor(){
        super();
        this.state = {
            employees : []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:3001/api/employees").then((res)=>{
console.log('The employee list is ',res.data);
this.setState({
    employees : res.data
})
        })
        .catch((err)=>{
            console.log('Te error is ',err);
        })
    }

    render(){
        return (
            <div>
                <table>
                    <thead>
                    <th>Name</th><th>Age</th><th>Salary</th>
                    </thead>
                    <tbody>
                {
this.state.employees.map((emp)=>{
    return (
        <tr key={emp._id}><td>{emp.name}</td><td>{emp.age}</td><td>{emp.salary}</td></tr>
    )
})
                }
                </tbody>
</table>
                </div>
        )
    }


}

export default Employees;