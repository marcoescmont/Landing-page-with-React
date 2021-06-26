import React from "react";
import PropTypes from "prop-types";

//  Jumbotron  //

export const Jumbotron = props => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.Title}</h1>
			<p className="lead">{props.Header}</p>
			<hr className="my-4" />
			<p>{props.Content}</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				{props.ButtonName}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {
	Title: PropTypes.string,
	Header: PropTypes.string,
	Content: PropTypes.string,
	ButtonName: PropTypes.string
};
