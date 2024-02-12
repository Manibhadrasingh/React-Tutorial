import React from "react";

function KeyList(){
    const names = ['Anju', 'Sanju', 'Shalu', 'Sanju']
    const nameList = names.map((name,index) => <h2 key ={index}>{index} {name} </h2>)
    return <div>{nameList}</div>
}
export default KeyList