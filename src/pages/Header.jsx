import css from '../pages/pages.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={css.header}>
      <div>
        <div className={css.logo}>
          Ad<span>CaR</span>e
        </div>
        <p>
          <span>C</span>amper <span>A</span>dventure <span>R</span>entals
        </p>
      </div>

      <nav className={css.nav_menu}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? css.active : '')}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={({ isActive }) => (isActive ? css.active : '')}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={({ isActive }) => (isActive ? css.active : '')}>
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
