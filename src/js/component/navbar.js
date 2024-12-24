import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context)
	const handleFavRemove = (fav) => {
	

		actions.addRemoveFavorite(fav)

	}
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container mx-5">
			<Link to="/">
			
				<span className="  navbar-brand mb-0 h1" style={{fontFamily:"Astral Delight"}}>
					Star Wars</span>
			</Link>
			<div className="ml-auto">
				
				<div className="dropdown">
					
			<button 
			className="btn btn-primary dropdown-toggle"
			 type="button" 
			 data-bs-toggle="dropdown" 
			 aria-expanded="false" 
			>
				Favorites({store.favorites.length})
			</button>
			<ul className="dropdown-menu mx-5">
                {store.favorites.length > 0 ? (
                    store.favorites.map((fav, index) => (
                        <li key={index} className="dropdown-item d-flex justify-content-bewtween align-items-center">
                        <span>{fav.name}</span>
                        <button 
                        onClick={() => handleFavRemove(fav)}
                        className="btn btn-danger btn-sm">
                            	<i className="fa-solid fa-trash" />
                        </button>
                        </li>
                    ))
                ) : (
                    <li className="dropdown-item">No hay favoritos </li>
                )}
				
			
			
				</ul>
				</div>
			
			</div>
			</div>
			
		</nav>
		
	);
};


