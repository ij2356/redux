import {createStore} from "redux"
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"


const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text });
};
const deleteToDo = (id) => {
  store.dispatch({ type: DELETE_TODO, id });
};

//add item reducer 
const reducer = (state = [] , action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id : Date.now()}];
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== parseInt(action.id));
    default:
      return state;
  }
}

const store = createStore(reducer);

const paintTodo = () => {
  const toDos = store.getState();
  const ul = document.querySelector("ul");
  ul.innerHTML = "";

  toDos.forEach((item) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.innerText = item.text;
    li.id = item.id;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  deleteToDo(id);
};

const dispatchAddToDo = (text) => {
  addToDo(text);
};

store.subscribe(()=> console.log(store.getState()))
store.subscribe(paintTodo);


const onSubmit = event => {
  const toDo1 = input.value;
  dispatchAddToDo(toDo1);
  event.preventDefault();
  event.stopPropagation();
}

form.addEventListener("submit", onSubmit);