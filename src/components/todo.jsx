import React from "react";
import { connect } from "react-redux";
import { deleteTodo ,addTodo} from "../store/store";
import {Link } from "react-router-dom";



function ToDo({ text, onBtnClick, id, key }) {
  
  return (
    <li id={id}>
     <Link className="mg-r-10" to = {`/${id}`} id = {id}> {text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  
  return {
    onBtnClick: (e) => {
      console.log(e.target.parentNode.id.toString());
      dispatch(deleteTodo(e.target.parentNode.id.toString()));
    }
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
