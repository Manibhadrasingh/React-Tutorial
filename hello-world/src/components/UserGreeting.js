import React, {Component} from 'react'

class UserGreeting extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedin : true
        }
    }
    render(){

        // first approach

        // if(this.state.isLoggedin){
        //     return <div>Hello manibhadra Singh</div>
        // }
        // else{
        //     return <div>Hello Guest</div>
        // }

        // second approach
        // let message 
        //     if(this.state.isLoggedin){
        //          message = <div>Hello Manibhadra Singh</div>
        //     }
        //     else{
        //         message = <div>Hello guest</div>
        //     }

        //     return(<div>{message}</div>)

        // third approach

        // return(
        //     this.state.isLoggedin  ?
        //     <div>Hello Manibhadra Singh</div> :
        //     <div>Hello Guest</div>
        // )

        // fourth approach

        return this.state.isLoggedin && <div>Hello Manibhadra Singh</div>
    }
}
export default UserGreeting