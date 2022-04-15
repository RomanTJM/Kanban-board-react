import React from 'react';
import Dropdown from './DropDown'

function Header() {
  return (
    <header className='header'>
      <h1 className='header-title'>Awesome Kanban Board</h1>
      <Dropdown />
    </header>
  );
}

export default Header;