import React, { useState } from "react";
import Input from "./input";
import TodoItem from "./ToDoItems";
function App() {
  var [list, setList] = useState([]);

  function addlist(item) {
    setList((x) => [...x, item]);
 
  }
  function deleteitem(id) {
    setList((prevslist) => {
      return prevslist.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <Input OnAdd={addlist} />
      <div>
        <ul>
          {list.map((todoitem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoitem}
              onchecked={deleteitem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
