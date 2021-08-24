import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  // Entered Value State
  const [enteredValue, setEnteredValue] = useState('');
  // Indicator State
  const [isValid, setIsValid] = useState(true);


  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0){
      setIsValid(false);
      alert('You need to write something in order to submit!!')
      return;
    }
    props.onAddGoal(enteredValue);

    // Clear the input
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Todo Form</label>
        <input value = {enteredValue} type="text" onChange={goalInputChangeHandler} 
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
