import React from 'react'
import Parent from './Parent'
import Child1 from './Child1'

const Propsdrilling = () => {
  return (
    <div className="task">
        <h1 className='task-header'>PropsDrilling</h1>
        <div className="task-container Propsdrilling" >
          <Parent/>
          <Child1/>
        </div>
      </div>
  )
}

export default Propsdrilling
