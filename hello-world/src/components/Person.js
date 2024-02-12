import React from 'react'

function Person({person}) {
  return (
    <div>
    <h2>
        My id is {person.id} & my name is {person.name} and i am {person.age} year old and my skill is {person.skill}
    </h2>
    </div>
  )
}

export default Person
