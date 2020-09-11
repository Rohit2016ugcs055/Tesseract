import React from 'react';
const person=(props)=>{
    return(
    
      <div className="personclass">
          <h onClick={props.remove}>My name is {props.name} My age is {props.age}</h>
          <p>{props.children}</p>
          <input type="text" onChange={props.change} />
      </div>

    );
}
export default person;