
import { Component } from 'react';
import { Button, ButtonCard } from './FeedbackOptions.styled';

export const FeedbackOptions = ({objectState,incrementClick}) =>{
    return (
      <ButtonCard>
      {Object.keys(objectState).map((option) => { 
        return( <Button key={option} type="button" name={option} onClick={e=>incrementClick(e.currentTarget.name)}>{option}</Button>)})}
      </ButtonCard>
    );
  }

