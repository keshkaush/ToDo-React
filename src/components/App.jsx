import React, { useState } from "react";
import List from "./AddingItems";

function App() {
  const [theArray, setTheArray] = useState([]);
  const [newValue, setNewValue] = useState("");

  function takeInput(event) {
    var input = event.target.value;
    setNewValue(input);
  }

  function addingToArray() {
    setTheArray((preValue) => [...preValue, newValue]);
    setNewValue("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={takeInput} value={newValue} />
        <button onClick={addingToArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {theArray.map((element) => (
            <List element={element} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
