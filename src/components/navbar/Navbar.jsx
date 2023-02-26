import React, { useEffect, useState } from 'react';

import './Navbar.scss';

import {Link } from 'react-router-dom';

function Navbar()  {

  const [active,setActive] =useState(false);

  const [open,setOpen] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true):setActive(false);
  }

  useEffect(()=>{
    window.addEventListener("scroll",isActive);

    return ()=>{
      window.removeEventListener("scroll",isActive)
    }
  },[]);

  const currentUser = {
    id:1,
    username:"John Doe",
    isSeller:true
  }



  return (
    <div className={active?"navbar active":"navbar"}>
      <div className='container'>
         <div className='logo'>
          <Link to="/"  className='link'>
             <span  className='text'>fiverr</span>
           </Link>
             <span  className='dot'>.</span>
         </div>
         <div className="links">
          <span >Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          { !currentUser && <span >Sign In</span>}  
        {!currentUser?.isSeller && <span >Become a Seller</span>} 
        {currentUser && (

          <div  onClick={()=>setOpen(!open)} className="user">
            <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
          <span>  {currentUser?.username}</span>
          {open && <div className="options">
              { 
                currentUser?.isSeller && (
                  <>
                  <Link  className='link' to="/gigs">Gigs</Link>
                  <Link className='link'  to="/add">Add New Gigs</Link>
                  </>
                )
              }
              <Link className='link'  to="/orders">Orders</Link>
              <Link className='link'  to="/messages">Messages</Link>
              <Link className='link'  to="/">LogOut</Link>
            </div>
          }
          </div>
        )}
        
          <button>Join In</button>
         </div>
      </div>
      { active && 
        <>
      <hr/>
      <div >
            <span>Test</span>
            <span>Test2</span>
      </div>
      </>
        }
    </div>

  )
}

export default Navbar
