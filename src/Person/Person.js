// the folder and file with first uppercase - for React component
// this is best practice
import React from 'react';
import {Component} from 'react';
// external global css file - with classes .Person, .Student
import './Person.css';

// module variable - used in Class Student
const myDivStyle = {maxWidth:'40%', margin:'10px auto',padding:'6px 0',
  backgroundColor:'#F6A4AC',textAlign:'center',border:'1px solid #000',
  fontSize:'1em',fontFamily:'Helvetica', color: '#03034c'};

// using custom component with function definition
const Person = (props) =>{
  // note the parentheses after return
  const myParagraphStyle = {marginBottom:'1px', color:'red', fontWeight: '700'};
  // inline styling - myDivStyle - function variable - effect only here
  const myDivStyle = {maxWidth:'40%', margin:'10px auto',padding:'6px 0',
  backgroundColor:'#cccc66',textAlign:'center',border:'1px solid #000',
  fontSize:'1em',fontFamily:'Helvetica', color: '#052707'};

  return ( 
  <div style={myDivStyle} className="Person">
    {/* using here a 'click' prop to trigger an event in App.js */}
    <h3 onClick={props.click} >
      My name is {props.name} and I am {props.age} years old.
    </h3>
    {/* change the state when the input is changing from the initial value */}
    <input onChange={props.changed} value={props.name} />
    { /* to get the items between <Person>children</Person>
        we access 'props.children'*/}
    <p style={myParagraphStyle}>{props.children}</p>
  </div> );
}


// using custom compoment with Component class of react
class Student extends Component {
  render () {
    // using here 'this' key word
    return (
      <div style={myDivStyle} className="Student">
        <h3>I am a student at {this.props.school}. </h3>
        {/* adds everything between <Student>...</Student> */}
        <p>{this.props.children}</p>
      </div>
    );
  }
}


export {Person, Student};

