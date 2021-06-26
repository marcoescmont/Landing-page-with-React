import React from "react";
import PropTypes from "prop-types";

//NavBar//

export const NavBar = props => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark fixed-top">
			<a className="navbar-brand text-light" href={props.LPUrl}>
				<h1>
					<h1 className={props.LPlogo}></h1> {props.LPname}
				</h1>
			</a>
			<button
				className="navbar-toggler"
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
