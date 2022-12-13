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
  incrementClick = option => {
    this.setState(prewstate => ({ [option]: prewstate[option] + 1, }));
  };
 
  countTotalFeedback =()=> {
  return Object.values(this.state).reduce((total,num)=>total+num,0)
  }
  countPositiveFeedbackPercentage =()=> {
    return Percents(this.state.good, this.countTotalFeedback());
  }
  render() {
    const {good,neutral,bad}=this.state
    return (
      <Card>
        <h2>Please leave feedback</h2>
        <FeedbackOptions
          objectState={this.state}
          incrementClick={this.incrementClick}
        />
        <h2> Statistics</h2>
        {this.countTotalFeedback === 0 ? (
          <p>No Feedbaak given</p>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        )}
      </Card>
    );
  }
}
