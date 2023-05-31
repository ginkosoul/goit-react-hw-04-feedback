import PropTypes from 'prop-types';
import css from '../FeedbackBtn/Feedback.module.css';

const FeedbackBtn = ({ handleClick, options }) => {
  return (
    <div className={css.container}>
      {options.map(e => (
        <button key={e} className={css.btn} id={e} onClick={handleClick}>
          {e}
        </button>
      ))}
    </div>
  );
};

FeedbackBtn.propTypes = {
  handleClick: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackBtn;
