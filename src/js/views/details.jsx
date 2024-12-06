import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Details = () =>{
    const { store, actions } = useContext(Context);
    const params = useParams()
    useEffect(()=>{
       actions.getOne(params.type, params.uid)
        console.log(params);
    },[])
    return(

       <div className="container">
       <div className="card">
        <div className="d-flex">
            <figure>
                <img   src="" alt="" />
                <figcaption>
                    {store.character?.properties?.name}
                </figcaption>
            </figure>

        <div>
        <p> eye color: {store.character?.properties?.eye_color}</p>
        <p>hair color: {store.character?.properties?.hair_color}</p>
        <p>mass: {store.character?.properties?.mass}
        </p>
        <p>skin color: {store.character?.properties?.skin_color}</p>
        </div>
       </div>
       </div>
       </div>
    )
}