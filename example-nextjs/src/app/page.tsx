import Image from "next/image";

import 'katex/dist/katex.min.css';
import Latex  from "react-latex-next";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>
      <Latex>We give illustrations for the three processes $e^+e^-$, gluon-gluon...</Latex>
    </main>
  );
}
