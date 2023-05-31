import React, { useState, useEffect } from "react";
import { Connect, connect } from "react-redux";
import { addTodo } from "../store/store";
import store from "../store/store";
import ToDo from "../components/todo";

const Home = (todos) => {

  //인풋
  const [text, setText] = useState("");
  
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("빈값입니다");
      return
    }
    store.dispatch(addTodo(text));

    localStorage.setItem("store", JSON.stringify(store.getState()));
  };

  return (
    <>
      <h1 className="fs-32 mg-b-20 fw-700">ToDos</h1>
      <form className = "HomeForm">
        <input type="text" value={text} onChange={onChange} />
        <button className="btn mg-l-10" type="submit" onClick={onSubmit}>
          제출
        </button>
      </form>
      <ul className="todoUl">
        {store.getState().map((toDo , key) => {
          return <ToDo {...toDo} key={key} />;
        })}
      </ul>
    </>
  );
};
function getCurrentState(state, ownProps) {
  return { state };
}

export default connect(getCurrentState)(Home);
