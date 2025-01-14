import styles from "./Layout.module.css"

function Layout({ children }) {
  return (
    <>
        <header className={styles.header}>
            <h1>Book App</h1>
            <p><a href="https://botostart.ir/">Botostart</a> | React.js Fll Course</p>
        </header>
           {children}
        <footer className={styles.footer}><p>Developer by Elnaz with ❤️ </p></footer>
    </>
  );
}

export default Layout