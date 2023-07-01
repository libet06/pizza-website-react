import React from 'react'
import { MenuList } from "../helpers/MenuList";
import "../styles/Menu.css";
import MenuItem from "../components/MenuItem"

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Nana's Menu</h1>
      <div className="menuList">
            {MenuList.map((menuItem, key) => {
                return (
                <MenuItem 
                key={key}
                image={menuItem.image} 
                name={menuItem.name} 
                price={menuItem.price}
                />
                )
            })}
      </div>
    </div>
  )
}

export default Menu
