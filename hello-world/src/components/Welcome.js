import React, {Component} from 'react'

// class Welcome extends Component{
//     render(){
//         return (
//             <div>
//                 <h1>Hello {this.props.name},is the son of {this.props.fatherName} </h1>
//             </div>
//         )
//     }
// }

class Welcome extends Component{
    render(){
        const {name, fatherName} = this.props
        return(
            <div>
                <h1>Hello {name} is the son of {fatherName} </h1>
            </div>
        )
    }
}

export default Welcome