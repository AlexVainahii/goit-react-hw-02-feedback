import { Button, ButtonCard } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ objectState, incrementClick }) => {
  return (
    <ButtonCard>
      {Object.keys(objectState).map(option => {
        return (
          <Button
            key={option}
            type="button"
            name={option}
            onClick={e => incrementClick(e.currentTarget.name)}
          >
            {option}
          </Button>
        );
      })}
    </ButtonCard>
  );
};

FeedbackOptions.propTypes = {
  objectState: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  incrementClick: PropTypes.func,
};
