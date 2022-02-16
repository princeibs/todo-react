function App() {
  return (
    <div className="App">
      <header>
        <div id="title">TODO</div>
        <input type="text" placeholder="Create a new todo ..." />
      </header>
      <div class="main">
        <div class="nav">
          <span class="items-count">2 items left</span>
          <span>
            <button>All</button>
          </span>
          <span>
            <button>Active</button>
          </span>
          <span>
            <button>Completed</button>
          </span>
        </div>
        <div class="todo-list">
          <div class="todo-item">
            <input type="checkbox" />
            <div class="todo-text">This is a new todo item</div>
            <button class="close-todo-item">x</button>
          </div>
          <div class="todo-item">
            <input type="checkbox" />
            <div class="todo-text">This is a new todo item</div>
            <button class="close-todo-item">x</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
