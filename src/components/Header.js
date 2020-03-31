import React from 'react';
import Logo from './icons/Logo';

function Header() {
  return (
    <header>
      <nav>
        <Logo />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
