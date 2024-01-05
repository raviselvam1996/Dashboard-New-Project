import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaInfoCircle, FaUserCircle} from 'react-icons/fa';
import './dashboard.css';
import { FaBullhorn, FaBook } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';



const Dashboard = () => {

  const [isLoggedIn,uptateLoggedIn] = useState(false)

  useEffect(() => {
   const loginValue = localStorage.getItem('isLoggedIn')
   if(loginValue === '1'){
    uptateLoggedIn(false)
   }
   else{
    uptateLoggedIn(true)

   }
   if(isLoggedIn){
    window.location.href = '/login';

  }

 
  },[isLoggedIn])

  const logoutHandler = () => {
    localStorage.setItem('isLoggedIn','0')
    uptateLoggedIn(true)

  }
 
  
  return (
   
      <div className="dashboard">
        <aside className="sidebar">
          <div className="profile-section">
            <FaUserCircle size={30} />
            <h3>Ravi Selvam</h3>
          </div>
          <nav className="nav-menu">
            <ul>
              <li><Link to="/"><FaBullhorn /> Announcement</Link></li>
              <li><Link to="/dashboard/blogs"><FaBook /> Blogs</Link></li>
           
              {/* Add additional menu items here */}
            </ul>
          </nav>
        </aside>
        <div className="main-content">
          <header className="topbar">
            <div className="topbar-left">
              <div className="logo">
                <strong>DARUL MAKMUR</strong>
              </div>
            </div>
            <div className="topbar-right">
              <button className='btn btn-sm'onClick={logoutHandler}>Logout</button>
              <FaTwitter className="icon" />
              <FaGithub className="icon" />
              <FaInfoCircle className="icon" />
            </div>
          </header>
          <div className="content">
          <div className='card' style={{minHeight:'80vh'}}>
            <div className='card-body'>
            {/* <BlogForm></BlogForm> */}
            {/* <AnnounceForm></AnnounceForm> */}
            <Outlet />
            </div>

          </div>
          </div>
        </div>
      </div>
   
  );
};

export default Dashboard;
