import React, { useContext} from "react";
import { Context } from "../store/appContext";


export const PeopleDetails =(props)=>{
const {store, actions} = useContext(Context);

    return(
        <div className="card">
        <div className="d-flex">
            <figure className="d-flex">
                <div style={{width:"800px", height:"600px"}}>
                <img   
                src={`https://starwars-visualguide.com/assets/img/${props.type}/${props.uid}.jpg`} 
                alt=""
               />  </div>
                <figcaption className=" text-center justify-content-center me-5">
                   <h3> {store.detailed?.properties?.name} </h3>
                   <p style={{fontSize:"25px"}}>{store.detailed?.description}</p>
                   
                </figcaption>
                
              
            </figure>
</div>
<h3  style={{border:"1px solid red"}}/>
        <div className=" d-flex text-center justify-content-center">
            <table style={{color:"red", fontSize:"20px"}}>
                <tr>
                <th>Mass
                    <td>{store.detailed?.properties?.mass}</td></th>
                <th>Hair color<td>{store.detailed?.properties?.hair_color}</td></th>
                <th>Eye color<td>{store.detailed?.properties?.eye_color}</td></th>
                <th>Skin color<td>{store.detailed?.properties?.skin_color}</td></th>
                <th>Height<td>{store.detailed?.properties?.height}</td></th>
                
                </tr>
            </table>
            
        </div>
       </div>
      
    )
}