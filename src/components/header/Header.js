import React from 'react';
import './Header.scss';
import { ReactComponent as IconSearch } from '../../assets/icons/search.svg';

const Header = () => (
  <div className="Header-wrapper">
    <nav
      className="Header-inner navbar"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="Header-logo-container navbar-brand">
        <h1 className="Header-logo">Rule of thumb.</h1>
        {/* eslint-disable-next-line */}
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className="Header-links navbar-menu">
        <ul className="Header-links-list navbar-end">
          <li className="Header-link">
            <a href="/past-trials">Past trials</a>
          </li>
          <li className="Header-link">
            <a href="/how-it-works">How it works</a>
          </li>
          <li className="Header-link">
            <a href="/login">Log in / Sign up</a>
          </li>
          <li className="Header-link">
            <button type="button" className="Header-link-search">
              <IconSearch />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
