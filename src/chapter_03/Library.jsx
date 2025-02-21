import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="React Native Express" numOfPage={600} />
      <Book name="React Native Express" numOfPage={600} />
      <Book name="React Native Express" numOfPage={600} />
    </div>
  );
}

export default Library;
