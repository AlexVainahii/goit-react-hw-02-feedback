import { Component } from 'react';
import { Button, ButtonCard } from './FeedbackOptions.styled';
import { Percents, sumArrayValues } from './Function';

export class FeedbackOptions extends Component {
  incrementGood = () => {
    this.setState(state => ({ good: this.state.good + 1 }));
  };
  incrementNeutral = () => {
    this.setState(state => ({ neutral: this.state.neutral + 1 }));
  };
  incrementBad = () => {
    this.setState(state => ({ bad: this.state.bad + 1 }));
  };
  countTotalFeedback() {
    return sumArrayValues(this.state);
  }
  countPositiveFeedbackPercentage() {
    return Percents(this.state.good, this.countTotalFeedback());
  }
  render() {
    return (
      <ButtonCard>
        <Button onClick={this.incrementGood}>Good</Button>
        <Button onClick={this.incrementNeutral}>Neutral</Button>
        <Button onClick={this.incrementBad}>Bad</Button>
      </ButtonCard>
    );
  }
}
