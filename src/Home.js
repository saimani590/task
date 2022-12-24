import React from 'react'
import { Link } from 'react-router-dom';

const home = () => {
  return (
   <div>
    <h1>Documents</h1><hr/>
    <nav>
        <ul>
          <li>
            <Link to="/document1">Sample Document1.pdf</Link>
          </li>
          <li>
            <Link to="/document2">Sample Document2.pdf</Link>
          </li>
          <li>
            <Link to="/document3">Sample Document3.pdf</Link>
          </li>
        </ul>
      </nav>
   </div>
  )
}

export default home;