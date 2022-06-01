import React from 'react';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney,faAddressCard,faFile,faAddressBook } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
  return (
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" ariaCurrent="page" to="/"><FontAwesomeIcon icon={faHouseChimney} size="4x" className='symbol'></FontAwesomeIcon></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about"><FontAwesomeIcon icon={faAddressCard} size="4x" className='symbol'></FontAwesomeIcon></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resume"><FontAwesomeIcon icon={faFile} size="4x" className='symbol'></FontAwesomeIcon></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact"><FontAwesomeIcon icon={faAddressBook} size="4x" className='symbol'></FontAwesomeIcon></Link>
          </li>
        </ul>
    

  );
}


