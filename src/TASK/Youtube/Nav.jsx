import React, { useRef } from 'react'
import IMG from '../../../public/img.png'

const Nav = () => {
    let theme = useRef();

    let themes = () => {
        // theme.current.innerHTML = theme.current.innerHTML === '&#9728;'? '&#9789;':'&#9728;';
        // console.log(theme.current.innerHTML);

        document.getElementById('ytparent').style.backgroundColor = theme.current.innerHTML == '☀'? 'white':'#292A2B';
        document.getElementById('desc').style.backgroundColor = theme.current.innerHTML == '☀'? 'white':'black';
        document.getElementById('ytparent').style.color = theme.current.innerHTML == '☀'? 'black':'white';
        theme.current.innerHTML = theme.current.innerHTML == '☀'? '&#9789;':'&#9728;';

        // if (theme.current.innerHTML == '☀') {
        //     theme.current.innerHTML = '&#9789;';
        //     document.body.style.backgroundColor = "white";
        //     document.getElementById('desc').style.backgroundColor ="white"
        //     document.body.style.color = "black";
        // } else {
        //     theme.current.innerHTML = '&#9728;';
        //     document.getElementById('desc').style.backgroundColor ="black";
        //     document.body.style.backgroundColor = "#292A2B";
        //     document.body.style.color = "white";
        // }
    }

    let handleHamberger = () => {
        alert('Hamberger Clicked')
    }

    let handleAccount = () => {
        alert('Profile/Account Clicked')
    }


    return (
        <header>
            <div id='lefts'>
                <div id='left'  onClick={handleHamberger}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h1>VideoZone</h1>
            </div>
            <div id='search'>
                <input type="search" name="" id="" />
                <button>Search</button>
            </div>

            <div id='theme' ref={theme} onClick={themes} >&#9789;</div>

            <div id='img' onClick={handleAccount}>
                <img src={IMG} alt="" width={35} height={35} />
            </div>


        </header>
    )
}

export default Nav
