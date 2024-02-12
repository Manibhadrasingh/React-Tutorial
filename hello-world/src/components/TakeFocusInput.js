import React, {Component} from "react"
import TakeInput from './TakeInput'
class TakeFocusInput extends Component{
    constructor(props) {
      super(props);
    
      this.componentRef = React.createRef()
     }
    clickHandler = () =>{
        this.componentRef.current.focusInput()
    };
    render(){
        return(
            <div>
                <TakeInput ref={this.componentRef}></TakeInput>
                <button onClick={this.clickHandler}> Click BTN</button>
            </div>
        )
    }
}
export default TakeFocusInput

