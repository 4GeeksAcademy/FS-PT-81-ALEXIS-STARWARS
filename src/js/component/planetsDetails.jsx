import React, { useContext} from "react";
import { Context } from "../store/appContext";


export const PlanetsDetails =(props)=>{
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
                <th>Rotation period</th>
                <th>Orbital period</th>
                <th>Gravity</th>
                <th>Population</th>
                <th>Climate</th>
                
                </tr>
                </thead>
                <tbody>
                <td>{store.detailed?.properties?.rotation_period}</td>
                <td>{store.detailed?.properties?.orbital_period}</td>
                <td>{store.detailed?.properties?.gravity}</td>
                <td>{store.detailed?.properties?.population}</td>
                <td>{store.detailed?.properties?.climate}</td>

                </tbody>
            </table>

            
        </div>
       </div>
      
    )
}