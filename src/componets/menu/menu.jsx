"use client";

import Menus from "./menu.styles";
const Menu = () => {
  return (
    <Menus>
      <div>
        <nav className='navMenu'>
          <a href='#'>Home</a>
          <a href='#'>Ventas</a>
          <a href='#'>Compras</a>
          <a href='#'>inventario</a>
          <div className='dot'></div>
        </nav>
      </div>
    </Menus>
  );
};

export default Menu;
