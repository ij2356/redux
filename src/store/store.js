import { createStore } from "redux";

const ADD = "ADD"
const DELETE = "DELETE"

export const addTodo = (text) => {
	return {
		type: ADD, 
		text
	}
}
export const deleteTodo = (id) => {
  return {
		type: DELETE, id
  };
};

const reducer = (state = [], action) => {
	switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now()}, ...state];
		case DELETE:
			return state.filter((item) => item.id.toString() !== action.id.toString());
		default: return state;
  }
}


const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
})

export default store;