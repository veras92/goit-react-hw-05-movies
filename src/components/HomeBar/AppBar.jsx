import { NavItem } from './AppBar.styled';
import css from './AppBar.module.css';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        {navItems.map(({ href, text }) => {
          return (
            <NavItem to={href} key={href}>
              {text}
            </NavItem>
          );
        })}
      </nav>
    </header>
  );
};

export default AppBar;
