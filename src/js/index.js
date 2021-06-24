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
import { Footer } from "./component/home.js";

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
		<div className="mr-4 ml-4 mb-5 mt-5">
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
					ImageURL="https://cdn.britannica.com/06/171306-050-C88DD752/Aurora-borealis-peninsula-Snaefellsnes-Iceland-March-2013.jpg"
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
					ImageURL="https://www.worldatlas.com/r/w1200/upload/8a/0c/7b/shutterstock-358038821.jpg"
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
					ImageURL="https://ecophiles.com/wp-content/uploads/2017/09/Crater-Lake-759x500.jpg"
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
					ImageURL="https://cdn.kimkim.com/files/a/content_articles/featured_photos/01d0ebb606a2065f0ecc8a3112ec85e67d9b2005/big-69cd90f23b17d410f24ca2af3fb95840.jpg"
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
		<div>
			<Footer />
		</div>
	</div>,
	document.querySelector("#app")
);
