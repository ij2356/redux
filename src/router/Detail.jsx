import React from "react";
import { connect } from "react-redux";

const Detail = (state1) => {
	return (
		<>
			<h1>Detail</h1>
			<p></p>
		</>
		
	)
}

const connectState = (state, thisProps) => {
	return {
		state
	}
}
export default connect(connectState)(Detail);