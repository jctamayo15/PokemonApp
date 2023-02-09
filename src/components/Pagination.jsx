import styles from "./Pagination.module.css";


export default function Pagination ({ gotoNextPage, gotoPrevPage }){
    return (
        <div className={styles.contentBtn}>
            {gotoPrevPage && <button className={styles.previous} onClick={gotoPrevPage}>&laquo; Previous</button>}
            {gotoNextPage && <button className={styles.next} onClick={gotoNextPage}>Next &raquo;</button>}
        </div>
    )
}