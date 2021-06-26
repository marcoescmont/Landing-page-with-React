import React from "react";
import PropTypes from "prop-types";

//  Cards  //

export const Cards = props => {
	return (
		<div className="card">
			<img
				src={props.ImageURL}
				className="card-img-top"
				alt={props.ImageAlt}
			/>
			<div className="card-body">
				<h5 className="card-title">{props.Title}</h5>
				<p className="card-text">{props.Content}</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">{props.ExtraContent1}</li>
				<li className="list-group-item">{props.ExtraContent2}</li>
				<li className="list-group-item">{props.ExtraContent3}</li>
			</ul>
			<div className="card-footer text-center">
				<a
					href="#"
					type="button"
					className="card-link btn btn-secondary">
					{props.ButtonContent}
				</a>
			</div>
		</div>
	);
};

Cards.propTypes = {
	ImageURL: PropTypes.string,
	ImageAlt: PropTypes.string,
	Title: PropTypes.string,
	Content: PropTypes.string,
	ExtraContent1: PropTypes.string,
	ExtraContent2: PropTypes.string,
	ExtraContent3: PropTypes.string,
	ButtonContent: PropTypes.string
};
