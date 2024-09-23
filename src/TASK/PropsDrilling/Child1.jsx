import React from 'react'

const Child1 = (props) => {
    console.log(props)
    console.log(props.data)
    console.log(props.data.property)
  return (
    <div id='child1'>
        <h1>Child 1</h1>
        <h2>{props.data.property}</h2>
    </div>
  )
}

export default Child1
