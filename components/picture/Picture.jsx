import PropTypes from 'prop-types';
import styles from './Picture.module.css'

const Picture = (props) => {
    const {src,alt}=props;
    return (
            <img className={styles.img} src={src} alt={alt} style={{width:'200px'}} />
       
    );
}
Picture.propTypes ={
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Picture;
