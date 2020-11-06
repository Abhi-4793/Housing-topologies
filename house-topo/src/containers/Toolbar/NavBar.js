import React from 'react';
import './NavBar.css';
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton';


const toolbar = props => (
<header className="toolbar">
  <nav className="toolbar_navigation">
    <div className="toolbar_toggle-button">
      <DrawerToggleButton click={props.drawerClickHandler} />
    </div>
  <div className="toolbar_logo"><i class="fas fa-warehouse"></i><a href="/">The logo</a></div>
  <div className="spacer"></div>
  <div className="toolbar_navigation-items">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/">Login</a></li>
    </ul>
  </div>
  
  
  </nav>
</header>
);
export default toolbar;