import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const StarshipsDetails = (props) => {
    const {store, actions} = useContext(Context);

    return (
        <div className="card">
            <div className="d-flex">
                <figure>
                    <img src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`} alt=" " />
                    <figcaption>
                        {store.detailed?.propierties?.name}
                    </figcaption>
                </figure>
            </div>
        
        <div>
       


            <p>
           MGLT: {store.detailed?.properties?.MGLT}
        </p>
        <p>
           Cargo capacity: {store.detailed?.properties?.cargo_capacity}
            </p>
        <p>
           Consumables: {store.detailed?.properties?.consumables}
            </p>
            <p>
           Cost in credits: {store.detailed?.properties?.cost_in_credits}
            </p>
            <p>
           Created: {store.detailed?.properties?.created}
            </p>
          
            <p>
           Crew: {store.detailed?.properties?.crew}
            </p>
            <p>
            Edited: {store.detailed?.properties?.edited}
            </p>
            <p>
            Max atmosphering speed: {store.detailed?.properties?.max_atmosphering_speed}
            </p>
            <p>
            Model: {store.detailed?.properties?.model}
            </p>
          
          
            </div>
        </div>
    )
}