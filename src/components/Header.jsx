import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <h1> SE Vuelo</h1> 
      
      <Link to="/">
        <button type="buttom">New Request</button>
        </Link>
        <Link to="/requests">
        <button type="buttom">Requests</button>
        </Link>
     </div>
    )
}

export default Header;