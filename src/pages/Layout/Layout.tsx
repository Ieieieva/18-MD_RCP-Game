import { Outlet, NavLink } from "react-router-dom";
import './Layout.css';
import { useTranslation } from 'react-i18next';

export const Layout = () => {
  const { t } = useTranslation();

  return (
    <>
      <nav className="navbar">
        <ul className="navbar__list">
          <li>
            <NavLink 
              to='/'
              className="navbar__item">
                {t('home')}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/board'
              className="navbar__item">
                {t('game')}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/scores'
              className="navbar__item">
                {t('scores')}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
 }