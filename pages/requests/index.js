import React from "react";
import styles from  "./request.module.css";

const login = () => {
    return (
        <div className={styles.tableContainer}>
            <table>
        <tr className={styles.tableRow}>
            <th className={styles.tableHead}>Name</th>
            <th className={styles.tableHead}>Date</th>
            <th className={styles.tableHead}>Time</th>
            <th className={styles.tableHead}>Style</th>
            <th className={styles.tableHead}>Action</th>
        </tr>
        <tr>
            <td className={styles.tableData}>Anom</td>
            <td className={styles.tableData}>4</td>
            <td className={styles.tableData}>50,000</td>
        </tr>
        <tr>
            <td className={styles.tableData}>Megha</td>
            <td className={styles.tableData}>3</td>
            <td className={styles.tableData}>25,000</td>
        </tr>
        <tr>
            <td className={styles.tableData}>Subham</td>
            <td className={styles.tableData}>1</td>
            <td className={styles.tableData}>10,000</td>
        </tr>
        </table>
        </div>
    )
}

export default login;