import React, { useContext } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";

export const Home = () => {
	const {store, actions}= useContext(Context)
	return(
		<div class= "text-center mr-5">
			<section>
				<h2>People</h2>
				<div className="row">
				{
					store.people?.map(el=> <Card key={el.uid} name={el.name} uid={el.uid} img={`https://starwars-visualguide.com/assets/img/characters/${el.uid}.jpg`}/>)

				}
				</div>
			</section>
		</div>
	);
	
}
	