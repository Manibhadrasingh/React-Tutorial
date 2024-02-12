import React, {Component} from 'react'

class RefsExample extends Component{

    // first way to create ref
    // constructor(props) {
    //   super(props)
    
    //     this.inputRef = React.createRef()
    // }
    constructor(props) {
      super(props)
    this.inputRef = React.createRef()
    this.cbRef = null
    this.setCbRef = element =>{
        this.cbRef = element
    } 
    }
    
    componentDidMount(){
        this.inputRef.current.focus()   
        console.log(this.inputRef)

        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    clickhandler=()=>{
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.setCbRef}></input>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.clickhandler}>Click</button>
            </div>
        )
    }
}
export default RefsExample