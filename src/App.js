import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Employees from './company/Employees';
import Companynav from './company/Companynav';
import Addemp from './company/Addemp';
import Postsearch from './Players/Postsearch';
/*
const Contact = ()=>{
  return (
    <div>
<h1>Inside the Contact</h1>
      </div>
  )
}

const About = ()=>{
  return (
    <div>
<h1>Inside About Us</h1>
      </div>
  )
}

const Home = ()=>{
  return (
<div>
<h1>Inside The Home Page</h1>
</div>
  );
}

const Error = ()=>{
  return (
    <div>
<h1>Page Not Exist</h1>
      </div>
  )
}
*/
class App extends Component {

render(){
  return (
    <BrowserRouter>
<div>
<Companynav/>
<Switch>  
<Route path="/" component={Employees} exact/>
<Route path="/add" component={Addemp}/>
<Route path="/post/:id" component={Postsearch}/>
</Switch>
</div>
    </BrowserRouter>
  )
}


 /* render() {
    return (
      <BrowserRouter>
      <div>
<Navigation/>        
<Switch>
<Route path="/" component={Home} exact/>        
<Route path="/contact" component={Contact} />
<Route path="/about" component={About}/>
<Route component={Error} exact/>
</Switch>
      </div>
      </BrowserRouter>
    );
  }*/
}

export default App;
