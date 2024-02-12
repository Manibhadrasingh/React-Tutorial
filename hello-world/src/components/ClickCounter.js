import React, {Component} from 'react'
import withCounter from './withCounter'
// import UpdatedComponent from './withCounter'
class ClickCounter extends Component{

    render(){
        const {count,incrementCount} = this.props
        return(
            <>
            <button onClick={incrementCount}>{this.props.name}Click {count} Times</button>
            </>
        )
    }
}
export default withCounter(ClickCounter,5)