import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container mx-5">
			<Link to="/">
			
				<span className="  navbar-brand mb-0 h1" style={{fontFamily:"Astral Delight"}}>Star Wars</span>
			</Link>
			<div className="ml-auto">
				
				<div className="dropdown">
			<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites
			</button>
			<ul className="dropdown-menu mx-5">
				<i className="fa-solid fa-trash" />
			
				</ul>
				</div>
			
			</div>
			</div>
			
		</nav>
		
	);
};
