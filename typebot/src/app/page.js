import Corpo from "./corpo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.tittle}>
        <h1>
            Pagina para testes do typebot
        </h1>

        <Corpo />
      </div>
    </main>
  );
}
