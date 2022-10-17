import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        className={css.input}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
