import React, { useContext} from "react";
import { Context } from "../store/appContext";


export const PeopleDetails =(props)=>{
const {store, actions} = useContext(Context);

    return(
        <div className="card">
        <div className="d-flex">
            <figure>
                <img   src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`} alt="" />
                <figcaption>
                    {store.detailed?.properties?.name}
                </figcaption>
            </figure>
</div>
        <div>
        <p> eye color: {store.detailed?.properties?.eye_color}</p>
        <p>hair color: {store.detailed?.properties?.hair_color}</p>
        <p>mass: {store.detailed?.properties?.mass}
        </p>
        <p>skin color: {store.detailed?.properties?.skin_color}</p>
        </div>
       </div>
      
    )
}