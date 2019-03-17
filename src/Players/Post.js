import React from 'react';
import './Post.css';
import {NavLink} from 'react-router-dom';
const Post = (props)=>{


return (
    <div>

<div className="col-lg-3">

<div className="card hovercard">
    <div className="cardheader">

    </div>
    <div className="avatar">
        <img alt="" src="http://lorempixel.com/100/100/people/9/" />
    </div>
    <div className="info">
        <div className="title">
    
            <NavLink activeStyle={{color:'#ccc',textDecoration:'bold'}} to={"/postssearch/"+props.id}>{props.title}</NavLink>
        
        </div>
      <div>
{props.body}

          </div>
         
    </div>
    
    
</div>

</div>




    </div>
)
}

export default Post;