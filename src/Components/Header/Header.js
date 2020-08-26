import React from 'react';
import logo from '../../images/Logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>

           <img src={logo} alt=''/>

           <nav>

               <a href='Home'>Home</a>
               <a href='Timeline'>Timeline</a>
               <a href='View'>View</a>



           </nav>
            
        </div>
    );
};

export default Header;