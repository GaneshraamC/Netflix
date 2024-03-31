import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

const  Nav=() =>{
    const [show, setShow] = useState(false);
    const tranitionNavbar =()=>
    {
        if(window.scrollY>100){
            setShow(true)
        }
        else{
            setShow(false)
        }
    };

useEffect (()=>{
    window.addEventListener("scroll",tranitionNavbar);
    // whenever you use addlistener u've to clear otherwise it keeps on running so for that i use return()
    return()=>window.removeEventListener("scroll",tranitionNavbar)
},[]);
console.log(show);
  return (
    <nav className={`nav ${show && "nav_black"}`}>
        <div className='nav_contents'>
            <Link to="./">
            
            <img src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png' alt='' className='nav_logo'/>
            </Link>
            <Link to="">
            <img src='https://occ-0-2484-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229' alt='' className='navavatar'/>
            </Link>
        </div>

    </nav>
  )
}

export default Nav;