import React from 'react'

const Hello = () =>{
    return React.createElement
    (
        'div', 
        {id : 'Hello', className : 'dummyclass' },
        React.createElement('h1', null, 'Hello Manibhadra')
    
    )
} 
export default Hello