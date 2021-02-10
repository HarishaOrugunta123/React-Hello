import React from 'react';
import ReactDOM from 'react-dom';

function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  
    return (
        <div>
      <a href="#" onClick={handleClick}>
        Click me
      </a>
      <h1>Hello</h1>
      </div>
    );
  }
  export default ActionLink;