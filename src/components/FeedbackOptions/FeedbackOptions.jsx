import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonContainer } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonContainer>
    {options.map(option => (
      <Button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        type="button"
      >
        {option}
      </Button>
    ))}
  </ButtonContainer>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
