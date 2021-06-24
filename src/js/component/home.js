import React from "react";
import PropTypes from "prop-types";
//include images into your bundle

//create your first component

//NavBar//

export const NavBar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<a className="navbar-brand text-light" href={props.LPUrl}>
				<h1>
					<h1 className={props.LPlogo}></h1> {props.LPname}
				</h1>
			</a>
			<button
				className="navbar-toggler float-right"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="btn-group ml-auto">
				<button
					type="button"
					className="btn text-light"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					<h2 className={props.DropdownIcon}></h2>
				</button>
				<div className="dropdown-menu dropdown-menu-right">
					<a
						className="dropdown-item"
						href={props.DropdownOp1URL}
						type="button">
						{props.DropdownOp1}
					</a>
					<a
						className="dropdown-item"
						href={props.DropdownOp2URL}
						type="button">
						{props.DropdownOp2}
					</a>
					<a
						className="dropdown-item"
						href={props.DropdownOp3URL}
						type="button">
						{props.DropdownOp3}
					</a>
					<a
						className="dropdown-item"
						href={props.DropdownOp4URL}
						type="button">
						{props.DropdownOp4}
					</a>
				</div>
			</div>
		</nav>
	);
};

NavBar.propTypes = {
	LPname: PropTypes.string,
	DropdownIcon: PropTypes.string,
	LPlogo: PropTypes.string,
	LPUrl: PropTypes.string,
	DropdownOp1: PropTypes.string,
	DropdownOp2: PropTypes.string,
	DropdownOp3: PropTypes.string,
	DropdownOp4: PropTypes.string,
	DropdownOp1URL: PropTypes.string,
	DropdownOp2URL: PropTypes.string,
	DropdownOp3URL: PropTypes.string,
	DropdownOp4URL: PropTypes.string
};

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
