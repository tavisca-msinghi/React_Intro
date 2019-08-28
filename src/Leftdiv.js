import React from "react"
import userdata from "./Userdata.js"
import ButtonComponent from './ButtonComponent.js'
class Leftdiv extends React.Component{
	constructor(props){
		super(props)
		this.abc=this.abc.bind(this)

	}

	// showbutton(){
	// 	return this.state.userdata.map((element, index) => {
	// 		return <div> <button key={index}>{element.firstname + " " + element.lastname} <ButtonComponent/> </button><br/> </div>
	// 	})}


abc(id)
{
	this.props.onclick(id)
}


	render(){

		const d = this.props.userdata.map((data)=> <ButtonComponent key={data.id} id={data.id} firstname={data.firstname} lastname={data.lastname} onnew={this.abc}/>)
		return(
	  	<div className="LeftComponent">
	 		{d}
	   	</div>
		)
	}
}
export default Leftdiv