import styles from '../components/layout.module.css'

export default function Layout({children}){
    return <div class={styles.container}>{children}</div>
}