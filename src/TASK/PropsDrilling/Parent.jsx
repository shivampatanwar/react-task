import React from 'react'
import Child1 from './Child1'

const Parent = () => {

    const [data, setData] = React.useState({
        property : '50 Acre',
        cars :{
            car1 : 'Toyota',
            car2 : 'Honda',
            car3 : 'BMW'
        }
    })
  return (
    <div id='parent'>
        <h3>Parent</h3>
      <Child1 data={data}/>
    </div>
  )
}

export default Parent
