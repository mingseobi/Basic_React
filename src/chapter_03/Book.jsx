import React from "react";

function Book(props) {
  return (
    <div>
      <h1>{"이 책의 이름은 ${props.name}dlqslek."}</h1>
      <p>{props.numOfPage}</p>
    </div>
  );
}

export default Book;
