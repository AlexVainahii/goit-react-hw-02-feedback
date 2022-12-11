import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Card } from './FeedbackOptions.styled';
import { Statistics } from './Statistics';
import { Percents} from './Function';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  IncrementOpt = option => {
    this.setState(prewstate => ({ option: prewstate[option] + 1 }));
  };
 
  countTotalFeedback() {
    return Object.values(this.state).reduce((total, val) => {
     console.log(total,val);
      return total + val;
    }, 0);
  }
  countPositiveFeedbackPercentage() {
    return Percents(this.state.good, this.countTotalFeedback());
  }
  render() {
    return (
      <Card>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          objectState={this.state}
   
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
