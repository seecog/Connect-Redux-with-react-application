import React,{Component} from 'react';
import {BrowserRouter,Switch,Link,Route} from 'react-router-dom';
import axios from 'axios';
import Post from './Post';
import Posts from './Posts';
import Postsearch from './Postsearch';
class Playerlist extends Component{


render(){

    return(
        
<BrowserRouter>
<div>
<Switch>
<Route path="/posts" component={Posts} exact/>
<Route path="/postssearch/:id" component={Postsearch}/>
</Switch>
</div>
</BrowserRouter>
    )
}

}

export default Playerlist;