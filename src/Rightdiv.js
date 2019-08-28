import React from "react"

class Rigthdiv extends React.Component{
	constructor(props){
		super(props)
		this.index=null;
		this.state={
			a:null,
			b:null
		}

	}

	changefirstname(value){ console.log(value)
	    this.setState({
	    	a:value
	    })
	}
	changelastname(value){ console.log(value)
	    this.setState({
	    	b:value
	    })
	}

	render(){
		if(this.props.index!=null){
            if(this.index==null || this.index!==this.props.index){ console.log("hi")
            	this.setState({
            	   a:this.props.userdata[this.props.index].firstname,
	  		       b:this.props.userdata[this.props.index].lastname
            	})
            	  this.index=this.props.index;
            }
			

		return(
	  	<div className="RightComponent"> 
	  		<input type="text" value={this.state.a} onChange={(e1)=> this.changefirstname(e1.target.value)}/> 
	  		<input type="text" value={this.state.b} onChange={(e2)=> this.changelastname(e2.target.value)}/>
	  		<button type="button" onClick={()=>this.props.onsubmit(this.index, this.state.a, this.state.b)}>Sumbit</button>
	 	</div>
		)}
		else{
			return null
		}
	}
}
export default Rigthdiv