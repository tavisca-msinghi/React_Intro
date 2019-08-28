import React from 'react';
import logo from './logo.svg';
import Leftdiv from './Leftdiv'
import Rightdiv from './Rightdiv'
import userdata from './Userdata.js'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      userdata:userdata, 
      renderid: null
    }
    this.changeID=this.changeID.bind(this)
    this.onchange=this.onchange.bind(this)
  }

  changeID(id)
  {
    this.setState((prevState)=>
    {
      return {
        userdata: prevState.userdata,
        renderid:id
      }
    }
    )
  }
  onchange(id,f,l){
    this.setState((prevState)=>{
      const d = prevState.userdata.map((e)=>{
        if(e.id===id){
          e.firstname=f
          e.lastname=l
        }
      return e
      });
      return{
        userdata:d,
        renderid:prevState.renderid
      }
    }
    )
  }
  render(){
  return (
    <div className="App">
    <Leftdiv userdata={this.state.userdata} onclick={this.changeID}/>
    {console.log(this.state.renderid)}
    <Rightdiv userdata={this.state.userdata} index={this.state.renderid}  onsubmit={this.onchange}/>
    </div>
  )
  }
}

export default App;
