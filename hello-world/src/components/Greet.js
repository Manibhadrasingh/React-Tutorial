import React from 'react'

// function Greet(){
//     return <h1>Hello, Manibhadra Singh</h1>
// }

// export const Greet = () => <h1>Hello, Manibhadra Singh</h1> 

// const Greet = props =>{
//     console.log(props)
//     return(
//         <div>
//             <h1>
//                 Hello, {props.name}, is the son of {props.fatherName}
//                 {props.children}
//             </h1>
//         </div>
//     )
// }

// Destructuring props

// const Greet = ({name, fatherName}) =>{
//     return (
//         <div>
//             <h1>
//                 Hello,{name} is the sone of {fatherName}
//             </h1>
//         </div>
//     )
// }

const Greet = props =>{
    const {name, fatherName} = props
    return (
        <div>
            <h1>
                Hello {name} is the son of {fatherName}
            </h1>
        </div>
    )
}

export default Greet
