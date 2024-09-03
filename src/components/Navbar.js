// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Import your custom CSS if needed

const Navbar = ({ setActivePage }) => {
  return (<div>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#"onClick={() => setActivePage('Home')}>MyApp</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">


    <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setActivePage('One')}>One</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setActivePage('Two')}>Two</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={() => setActivePage('Three')}>Three</a>
          </li>



    </ul>
   
  </div>
</nav>
    </div>
  );
};

export default Navbar;
