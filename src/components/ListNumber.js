import React from 'react'


const numbers = [1, 2, 3];
const listItems = numbers.map((number) =>
  <li key={number}>{number}</li>
);


//I like the props way pass value into funciton better than above one
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number}>{number}</li>
  );
  return (
    <ul>1000 Units Price: {listItems}</ul>
  );
}

export {listItems, NumberList}