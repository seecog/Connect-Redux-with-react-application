import React,{Component} from 'react';
import axios from 'axios';
import Post from './Post';
class Postsearch extends Component{

constructor(){
    super();
    this.state = {
        post : {}
    }
}

componentDidMount(props){
    console.log('The search id is ',this.props.match.params.id);
axios.get("https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.id).then((res)=>{
console.log("teh search data is ",res.data);
this.setState({
    post : res.data
})
})
.catch((err)=>{
    console.log('The error is ',err);
})
}

move = ()=>{
   //console.log('-->',this.props)
   this.props.history.push({pathname : '/posts'})
}


// getThere=()=>{
//     alert("hi")
//     this.props.history.push({pathname : "/posts"})
//     //push({pathName : "/67"})
// }

render(){
    return (
        <div>
<Post   id={this.state.post.id} title={this.state.post.title} body={this.state.post.body} />
       
         <div>
         <button onClick={()=>this.move()}>Move</button>
                       </div>
                       </div>
    )
}

}

export default Postsearch;