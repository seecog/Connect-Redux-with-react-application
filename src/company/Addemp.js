import React,{Component} from 'react';
import axios from 'axios';
class Addemp extends Component{

constructor(){
    super();
    this.state = {
        name : 'Amitabh Bacchan',
        age : 80,
        salary : 150
    }
}

saverecord=()=>{
    console.log('The record is ', this.state.name)
axios.post("http://localhost:3001/api/employees",{
    name : this.state.name,
    age : this.state.age,
    salary : this.state.salary
}).then((res)=>{
alert("Record added successfully !");
})
.catch((err)=>{
    console.log('The errror is ',err);
})
}

render(){
    return (
        <div>
<p>
Name : <input value={this.state.name}  />
</p>
<p>
Age : <input value={this.state.age} />
</p>
<p>
Salary : <input value={this.state.salary}  />
</p>
<p>
 <button onClick={this.saverecord}>Save Record</button>
</p>
        </div>
    )
}


}

export default Addemp;