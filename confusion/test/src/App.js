import React, { Component } from 'react';
import {Navbar, NavbarBrand} from "../node_modules/reactstrap/dist/reactstrap.min";
import Menu from './component/Menu';
import './App.css';
import {data} from './shared_Data/sharedData';

class App extends Component{

// make data visual to all pages "pages that toke the data will appear in"
  constructor(props){
  super(props);
  this.state={
    dishes:data
      }
    }

render(){
 
  return (
    <div>
      
      {/* adding menu page by this line */}
      <Menu dishes={this.state.dishes}/>
    </div>
     
    );
  

} 
}

export default App;
