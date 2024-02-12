import React from 'react';
import './Use.css';
const DateChanger = () => {
  let curDate = new Date();
  let time = curDate.getHours();
  let greeting = '';
  const col = {};
  
  if(time>=1 && time< 12){
    greeting='Good Moring';
    col.color="Green";
  }
  else if (time >=12 && time <18){
    greeting='Good Afternoon';
    col.color="Orange";
  } 
  else{
    greeting='Good Night';
    col.color="Blcak";
  }
  return(
    <h1>Hello Sir,<span style={col}>{greeting}</span> </h1>
  )
  
};

export default DateChanger;
