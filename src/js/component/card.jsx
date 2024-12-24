import React, {useContext, useState} from "react"
import { Link } from "react-router-dom"

import { Context } from "../store/appContext";



export const Card = (props) =>{


    
    const {store, actions} = useContext(Context);
    const handleFav = () => {
        const fav= {...props}
 
    actions.addRemoveFavorite(fav)

    }

    

    return (
        <div className="col-sm-6 col-m-4 col-lg-3">
            <div className="card">
                <figure>
                <img className="card-img-top" src={props.img} alt={props.name} />
                <figcaption>
                    <h3>{props.name}

                    </h3>
                    
                </figcaption>
                
                </figure>
                <div className="d-flex justify-content-around">
                <Link to={`/details/${props.type}/${props.uid}`}>
                <button className="btn btn-primary">Learn more</button>
                </Link>
                <button className="btn btn-outline-warning" onClick={handleFav}>
                <i className="fa-regular fa-star"></i>
                    </button>

             
                     </div>
              </div>
                
                </div>
      
    )
}