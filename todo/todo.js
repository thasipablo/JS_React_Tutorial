let todos = [
  {
    text: "attend js session",
    done: false,
  },
  {
    text: "do js exercise",
    done: false,
  },
];

// get todo elements
const todoContainer = document.querySelector(".todo-list");
const inputElement = document.querySelector(".inputField");
const addTodoBtn = document.querySelector(".addTodoBtn");

const refreshDom = () => {
  todoContainer.innerHTML = "";

  todos.forEach((todo) => {
    // create todo elements
    const todoItem = document.createElement("p");

    const todoText = document.createElement("span");
    todoItem.classList.add("todo-item");
    todoText.innerHTML = todo.text;
    const todoAction = document.createElement("input");
    todoAction.setAttribute("type", "checkbox");

    // build todo element
    todoItem.appendChild(todoText);
    todoItem.appendChild(todoAction);
    // build todo container
    todoContainer.appendChild(todoItem);
  });
};

refreshDom();

// get todo from the form
addTodoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let todo = { done: false };
  todo = { text: inputElement.value, ...todo };
  todos = [...todos, todo];

  // empty the field
  inputElement.value = "";

  console.log("todo =>", todo);
  console.log("todos =>", todos);

  refreshDom();
});
