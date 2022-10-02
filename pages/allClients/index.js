import React from "react";
import styles from  "./login.module.css";

const login = () => {
    return (
        <div className={styles.tableContainer}>
            <table>
        <tr >
            <th className={styles.tableHead}>Client Name</th>
            <th className={styles.tableHead}>Times Visited</th>
            <th className={styles.tableHead}>Amount Spend</th>
        </tr>
        <tr>
            <td className={styles.tableData}>Anom</td>
            <td className={styles.tableData}>19</td>
            <td className={styles.tableData}>Male</td>
        </tr>
        <tr>
            <td className={styles.tableData}>Megha</td>
            <td className={styles.tableData}>19</td>
            <td className={styles.tableData}>Female</td>
        </tr>
        <tr className="tableRow">
            <td className={styles.tableData}>Subham</td>
            <td className={styles.tableData}>25</td>
            <td className={styles.tableData}>Male</td>
        </tr>
        </table>
        </div>
    )
}

export default login;