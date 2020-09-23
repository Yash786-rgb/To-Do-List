import React, { useState } from "react";
import Item from "./components/item.jsx";

function App() {
  var [task, addTask] = useState("");
  var [progress, addProgress] = useState([]);

  function changeTask(event) {
    addTask(event.target.value);
  }

  function handleClick() {
    if (task == "") {
      alert("Enter a task");
    } else if (progress.indexOf(task) == -1) {
      addProgress((prev) => {
        return [...prev, task];
      });
    }
    addTask("");
  }
  function removeTask(id) {
    addProgress(
      progress.filter(function (p, index) {
        return !index == id;
      })
    );
  }

  function createItem(todo, index) {
    return <Item key={index} id={index} onItem={removeTask} work={todo} />;
  }
  function handleKey(event) {
    // console.log(event.which);
    if (event.which === 13) {
      if (task == "") {
        alert("Enter a task");
      } else if (progress.indexOf(task) == -1) {
        addProgress(function (prev) {
          return [...prev, task];
        });
      }
      addTask("");
    }
  }
  function clearAll() {
    addProgress([]);
  }

  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6 col-7 in">
            <input
              class="myInput"
              onKeyPress={handleKey}
              value={task}
              onChange={changeTask}
              type="text"
              placeholder="   Enter your tasks"
            />
          </div>
          <div class="col-lg-3 col-md-2 col-sm-3 col-1 ">
            <button class="btn btn-success myBtn" onClick={handleClick}>
              ADD
            </button>
          </div>
        </div>
      </div>
      <br />
      <div class="row">
        <div class="col-4"></div>
        <div class="col-6 item">
          <ul class="task">{progress.map(createItem)}</ul>
        </div>
        <button class="clearBtn btn btn-danger" onClick={clearAll}>
          Clear all
        </button>
      </div>
    </div>
  );
}

export default App;
