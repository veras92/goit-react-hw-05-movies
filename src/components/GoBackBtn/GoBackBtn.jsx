import { Link } from 'react-router-dom';
import css from './GoBackBtn.module.css';

const GoBackBtn = ({ to, children }) => {
  return (
    <button className={css.btn} type="button">
      <Link to={to}>{children}</Link>
    </button>
  );
};

export default GoBackBtn;
