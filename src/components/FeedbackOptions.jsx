import { Component } from 'react';
import { Button, ButtonCard } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { incrementGood, incrementBad, incrementNeutral } = this.props;
    return (
      <ButtonCard>
        <Button onClick={incrementGood}>Good</Button>
        <Button onClick={incrementNeutral}>Neutral</Button>
        <Button onClick={incrementBad}>Bad</Button>
      </ButtonCard>
    );
  }
}
