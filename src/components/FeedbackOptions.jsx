
import { Component } from 'react';
import { Button, ButtonCard } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {const {objectState} = this.props
    return (
      <ButtonCard>
      {Object.keys(objectState).map((option) => {console.log("option"); return( <Button key={option} >{option}</Button>)})}
      </ButtonCard>
    );
  }}

