import React,{Component} from 'react';
import {BrowserRouter,Switch,Link} from 'react-router-dom';
import axios from 'axios';
import Post from './Post';
class Posts extends Component{
constructor(){
    super();
    this.state = {
      posts : []
    };
}



componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
this.setState({
    posts : res.data
})
    })
    .catch((err)=>{
        console.log('The error is ',err);
    })
}
render(){
    return (
        <div>

{
this.state.posts.map((post)=>{
    
return (
<div key={post.id}>
<Post    id={post.id} title={post.title} body={post.body} />
</div>
)
})

}
        </div>
    )
}


}

export default Posts;