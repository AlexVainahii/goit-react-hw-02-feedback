import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Card } from './FeedbackOptions.styled';
import { Statistics } from './Statistics';
import { Percents, sumArrayValues } from './Function';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
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
      <Card>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          incrementGood={this.incrementGood}
          incrementNeutrall={this.incrementNeutral}
          incrementBad={this.incrementBad}
        />
        <h2> Statistics</h2>
        {this.countTotalFeedback === 0 ? (
          <p>No Feedbaak given</p>
        ) : (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotalFeedback={this.countTotalFeedback}
            ountPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        )}
      </Card>
    );
  }
}
