import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Card } from './FeedbackOptions.styled';
import { Statistics } from './Statistics/Statistics';
import { Percents, sumArrayValues } from './Function';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  incrementGood = () => {
    this.setState(prewstate => ({ good: prewstate.good + 1 }));
  };
  incrementNeutral = () => {
    this.setState(prewstate => ({ neutral: prewstate.neutral + 1 }));
  };
  incrementBad = () => {
    this.setState(prewstate => ({ bad: prewstate.bad + 1 }));
  };
  countTotalFeedback() {
    return sumArrayValues(this.state);
  }
  countPositiveFeedbackPercentage() {
    return Percents(this.state.good, this.countTotalFeedback());
  }
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Card>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          incrementGood={this.incrementGood}
          incrementNeutral={this.incrementNeutral}
          incrementBad={this.incrementBad}
        />
        <h2> Statistics</h2>
        {this.countTotalFeedback() === 0 ? (
          <p>No Feedbaak given</p>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={this.countTotalFeedback()}
            ountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Card>
    );
  }
}
