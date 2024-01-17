import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>React Crypto-App</h1>
        <p>
          <a href="https://github.com/SamiraDorchalian?tab=repositories">My GitHub </a> | React.js
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By Samira With 💰</p>
      </footer>
    </>
  );
}

export default Layout;
