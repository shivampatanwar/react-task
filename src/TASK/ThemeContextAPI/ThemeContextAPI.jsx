import React from 'react'
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';
import Container4 from './Container4';
import ThemeChanger from './ThemeChanger';
import './ThemeContextAPI.css'


const ThemeContextAPI = () => {
  return (
    <div className="task">
        <h1 className='task-header'>ThemeContextAPI</h1>
        <div className="task-container ThemeContextAPI" id='ThemeContextAPI' >
          <ThemeChanger>
            <Container1 />
            <Container2 />
            <Container3 />
            <Container4 />
          </ThemeChanger>
        </div>
      </div>
  )
}

export default ThemeContextAPI
