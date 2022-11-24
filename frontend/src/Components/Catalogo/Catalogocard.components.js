import { Link } from "react-router-dom";
import styles from "./Catalogocard.module.css";

export function Catalogocard({ pelicula }) {
    console.log(pelicula)
    const urlimagen = "https://image.tmdb.org/t/p/w200" + pelicula.urlimagen;

    return <li className={styles.catalogopelicula}>
        <Link to={"/descripcion/" + pelicula.id_pelicula}>
            <img width={230}
                height={345}
                className={styles.peliculaImagen}
                src={urlimagen}
                alt={pelicula.titulo}/>
                {pelicula.titulo}
        </Link>
    </li>
}