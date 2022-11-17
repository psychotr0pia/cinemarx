import {Catalogocard} from "./Catalogocard.components";
//import pelis from "./pelis.json";
import styles from "./catalogolist.module.css";
//import axios from "../Services/http-common.js";
import { useEffect, useState } from "react";
import PeliculaService from "../Services/pelicula.service";
//import PeliculaService from "../Services/pelicula.service";

export function Movies(){
    
    const [peliculas, setpeliculas ] = useState([]);


    useEffect(()=>{
        PeliculaService.getAll('/pelicula')
        .then((res)=>{
            setpeliculas(res?.data || []);
            if(!res.data){
                alert("NO SE ENCONTRO LA INFORMACION")
            }
        }).catch((err)=>{
            console.log("error: ", err)
        })
    },[])

    return(
        <ul className={styles.catalogolist}>
            {peliculas.map ((peliculas,index)  =>(       
                <Catalogocard key={peliculas.id_pelicula}  pelicula = {peliculas}/>
            ))}
        </ul>
        
    );
}