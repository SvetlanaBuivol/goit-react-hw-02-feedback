import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map(option => {
      return (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      );
    })}
  </ul>
);

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
