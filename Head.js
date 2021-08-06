import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header class="header">
      <div class="header-container">
        <img src="assets/img/perfil.jpg" alt="" class="header__img" />

        <a href="#" class="header__logo">
          Chisom
        </a>

        <NavLink to="/" className="link" activeClassName="active" exact>
          My Books
        </NavLink>
        <NavLink to="/add-books" className="link" activeClassName="active">
          Add a book
        </NavLink>

        <h1> Je Lis</h1>
        <div class="header-search">
          <input type="search" placeholder="Search" class="header__input" />
          <i class="header__icon"></i>
        </div>

        <div class="header-toggle">
          <i id="header-toggle"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
