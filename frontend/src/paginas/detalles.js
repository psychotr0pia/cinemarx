import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"
import style from "./detalles.module.css"
import PeliculaService from "../Services/pelicula.service";
import styles from "../Components/Catalogo/Catalogocard.module.css";

export function DetallesHola(props) {
    const [peliculas, setpeliculas] = useState([]);
    useEffect(() => {
        PeliculaService.get(props.match.params.peliculaId)
            .then((res) => {
                setpeliculas(res?.data || []);
                if (!res.data) {
                    alert("NO SE ENCONTRO LA INFORMACION")
                }
            }).catch((err) => {
                console.log("error: ", err)
            })
    }, [])
    //const id_peli = props.match.params.peliculaId
    const urlimagen = "https://image.tmdb.org/t/p/w300" + peliculas.urlimagen;
    return (
        <>
            <Link to="/" className="Titulo">
                <h1 className={style.Titulo}>Catalogo</h1></Link>
            <div className={style.DetallesContainer}>
                <div>
                    <li className={styles.catalogopelicula}>
                        <img
                            className={styles.peliculaImagen2}
                            src={urlimagen}
                            alt={peliculas.titulo} />
                    </li>
                    <li className={styles.descripcion}>
                        <ul>Titulo: {peliculas.titulo}</ul>
                        <ul>Calificacion: {peliculas.calificacion}</ul>
                        <ul>Director: {peliculas.director}</ul>
                        <ul>Elenco: {peliculas.elenco}</ul>
                        <ul>Restriccion: {peliculas.restriccion}</ul>
                        <ul>Duracion: {peliculas.duracion} min </ul>
                        <ul>Sinopsis: {peliculas.sinopsis}</ul>
                    </li>
                </div>
            </div>
        </>
    )
};

