import styles from './Logo.module.css';
import {memo} from 'react';
import {Link} from "react-router-dom";

function Logo({image}) {

    return (
        <>
            <Link to={"/"}>
                <img className={styles.logo} src={image} alt="Логотип сервиса"/>
            </Link>
        </>)
}

export default memo(Logo);