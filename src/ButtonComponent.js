import React from 'react'
import userdata from './Userdata.js'

class ButtonComponent extends React.Component{
  constructor(){
  	super()
  }
  render(){
  	return(
  		<div>
  		<button type="button" onClick={()=>this.props.onnew(this.props.id)}> {this.props.firstname + " " + this.props.lastname}</button><br/>
  		</div>

  	)
  }

}
export default ButtonComponent