import React, { useContext} from "react";
import { Context } from "../store/appContext";


export const PlanetsDetails =(props)=>{
const {store, actions} = useContext(Context);

    return(
        <div className="card">
        <div className="d-flex">
            <figure>
                <img   src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`}  alt=" " />
                <figcaption>
                    {store.detailed?.properties?.name}
                </figcaption>
            </figure>

</div>

        <div>
        <p> 
            {store.detailed?.properties?.model}
            </p>
        <p>
            {store.detailed?.properties?.manufacturer}
            </p>
            <p> 
        Rotation period: {store.detailed?.properties?.rotation_period}
            </p>
        <p>
        Orbital period: {store.detailed?.properties?.orbital_period}
            </p>
        <p>
        Gravidty: {store.detailed?.properties?.gravity}
        </p>
        <p>
        Population: {store.detailed?.properties?.population}
            </p>
        <p>
        Climate: {store.detailed?.properties?.climate}
            </p>
        </div>
       </div>
      
       
    )
}