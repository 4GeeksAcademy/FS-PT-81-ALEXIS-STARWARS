import React, {useContext} from "react";
import { Context } from "../store/appContext";

export const StarshipsDetails = (props) => {
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
        <table style={{color:"red", fontSize:"20px", borderCollapse: "separate", borderSpacing: "10px" }}>
            <thead>
            <tr>
            <th>MGLT</th>
            <th>Cargo capacity</th>
            <th>Consumables</th>
            <th>Cost in credits</th>
            <th>Created</th>
            <th>Crew</th>
            <th>Edited</th>
            <th>Max atmosphering speed</th>
            <th>Model</th>
            
            </tr>
            </thead>
            <tbody>
            <td>{store.detailed?.properties?.MGLT}</td>
            <td>{store.detailed?.properties?.cargo_capacity}</td>
            <td>{store.detailed?.properties?.consumables}</td>
            <td>{store.detailed?.properties?.cost_in_credits}</td>
            <td>{store.detailed?.properties?.created}</td>
            <td>{store.detailed?.properties?.crew}</td>
            <td>{store.detailed?.properties?.edited}</td>
            <td>{store.detailed?.properties?.max_atmosphering_speed}</td>
            <td>{store.detailed?.properties?.model}</td>

            </tbody>
        </table>

        
    </div>
   </div>
  
)
}