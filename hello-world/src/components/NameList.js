import React from "react";
import Person from './Person'

// function NameList(){
//     const names = ['Ram', 'Shyam', 'Radha']
//     const nameList = names.map(name => <h2>{name}</h2>)
//     return(
//         <div>
//         <h1>{names[0]}</h1>
//         <h1>{names[1]}</h1>
//         <h1>{names[2]}</h1>

//          {names.map(name => <h2>{name}</h2>) }
//              {nameList}
//         </div>
//     )
// }

function NameList() {
  const person = [
    {
      id: 1,
      name: "Ram",
      age: 17,
      skill: "Spiritual",
    },
    {
        id : 2,
        name : 'Shyam',
        age : 18,
        skill : 'Traditional'
    },
    {
        id : 3,
        name : 'Mohan',
        age : 19,
        skill : 'Consistent'
    },
    {
        id : 4,
        name : 'Shiva',
        age : 20,
        skill : 'Perfectionist'
    },
  ];

  const personList = person.map(person => <Person key = {person.id} person ={person}/> )
    // <h2>
    //     My id is {person.id} & my name is {person.name} and i am {person.age} year old and my skill is {person.skill}
    // </h2>
    
    return <div>{personList}</div>
}

export default NameList;
