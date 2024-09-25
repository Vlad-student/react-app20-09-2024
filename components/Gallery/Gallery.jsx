import Picture from "../picture/Picture"
import arrayPicks from "./data"
import styles from './Gallery.module.css'



const Gallery = () => {
    return (
        <section>
            {arrayPicks.map((pic)=><Picture className={styles.pic
            } key={pic.id} src={pic.src} alt={pic.alt} />)}
        </section>
    );
}

export default Gallery;
