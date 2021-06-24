//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { NavBar } from "./component/home.js";
import { Jumbotron } from "./component/home.js";
import { Cards } from "./component/home.js";

//render your react application
ReactDOM.render(
	<div>
		<div>
			<NavBar
				LPname="Landing Page"
				DropdownIcon="far fa-caret-square-down"
				LPlogo="fab fa-react"
				LPUrl="#"
				DropdownOp1="Home"
				DropdownOp2="About"
				DropdownOp3="Services"
				DropdownOp4="Contact"
				DropdownOp1URL="#"
				DropdownOp2URL="#"
				DropdownOp3URL="#"
				DropdownOp4URL="#"
			/>
		</div>
		<div className="w-75 m-auto">
			<div>
				<Jumbotron
					Title="Hello, world!"
					Header="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
					Content="It uses utility classNamees for typography and spacing to space content out within the larger container."
					ButtonName="Learn more"
				/>
			</div>
			<div className="card-deck">
				<Cards
					ImageURL=""
					ImageAlt=""
					Title="THIS"
					Content="Some quick example text to build on the card
					title and make up the bulk of the cards content."
					ExtraContent1="You"
					ExtraContent2="Can"
					ExtraContent3="Put"
					ButtonContent="The sky"
				/>
				<Cards
					ImageURL=""
					ImageAlt=""
					Title="IS"
					Content="Some quick example text to build on the card
					title and make up the bulk of the cards content."
					ExtraContent1="Whatever"
					ExtraContent2="You"
					ExtraContent3="Want"
					ButtonContent="Is"
				/>
				<Cards
					ImageURL=""
					ImageAlt=""
					Title="REALLY"
					Content="Some quick example text to build on the card
					title and make up the bulk of the cards content."
					ExtraContent1="In"
					ExtraContent2="This"
					ExtraContent3="Ones"
					ButtonContent="The"
				/>
				<Cards
					ImageURL=""
					ImageAlt=""
					Title="AMAZING!!"
					Content="Some quick example text to build on the card
					title and make up the bulk of the cards content."
					ExtraContent1="Is"
					ExtraContent2="Really"
					ExtraContent3="Cool"
					ButtonContent="Limit"
				/>
			</div>
		</div>
	</div>,
	document.querySelector("#app")
);
