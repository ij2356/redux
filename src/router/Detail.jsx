import { stringify } from "jade/lib/utils";
import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../store/store";
import store from "../store/store";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

//삭제버튼 만들고 새로고침해도 에러안나도록 수정
const Detail = ({ toDos, onBtnClick }) => {
	const id1 = useParams().id;
	const toDo = toDos.find((toDo) => toDo.id === parseInt(id1));
  
	const done = (e) => {
		console.log(id1);
	}
  const detailDelete = (e) => {
    e.preventDefault();
    store.dispatch(deleteTodo(id1));
    alert("삭제완료");
    window.history.back();
	}

  return (
    <>
      <h1 className="fs-32 fw-700 mg-b-20">Detail</h1>
      <p className="fs-12 mg-b-30">id : {toDo ? toDo.id : "새로고침되었습니다 홈으로 돌아가세요"}</p>
      <p>
        당신의 오늘 할일은 : <span className="fs-20 fw-500">{toDo ? toDo.text : "새로고침되었습니다 홈으로 돌아가세요"}</span>
      </p>
      <button className="mg-t-20 btn w-100" onClick={detailDelete}>삭제</button>
    </>
  );
};

const connectState = (state, thisProps) => {
	return {
    toDos: state,
   
  };
}


export default connect(connectState)(Detail);