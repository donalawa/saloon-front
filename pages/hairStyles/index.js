import React from "react";
import styles from  "./hairstyle.module.css";

const login = () => {
    return (
            <div className={styles.styleContainer}>
            <div className={styles.Container}>
                <h1 className={styles.h1}>Add Hair Styles</h1>
                <br />
                <div className={styles.styleName}>
                    <input className={styles.name} type="text" placeholder="Style name" required/>
                </div>
                <div className={styles.styleTime}>
                    <input className={styles.name} type="time" placeholder="Time" required/>
                </div>
                <div className={styles.StylePrice}>
                    <input className={styles.name} type="number" placeholder="Price" required/>
                </div>
                <div className={styles.StylePrice}>
                    <input className={styles.name} type="image" placeholder="Images" required/>
                </div>
                <button className={styles.submitBtn}>Submit</button>
            </div>
        </div>
    )
}

export default login;