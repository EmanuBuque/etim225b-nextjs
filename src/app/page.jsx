import Image from "next/image";

import Link from "next/link";
import styles from "./page.module.css";

function Home() {
  return (
    <div className={styles.containerHome}>
   <div className={styles.containerlistas}>
    <h1>Exemplos</h1>
    <Link href="/exemplos/ex-01">Exemplo 1</Link>
    <Link href="/exemplos/ex-02">Exemplo 2</Link>
     <Link href="/exemplos/ex-03">Exemplo 3</Link>
       <Link href="/exemplos/ex-04">Exemplo 4</Link>
       <Link href="/exemplos/ex-05">Exemplo 5</Link>
   </div>
   <div className={styles.containerlistas}>
    <h1>atividades</h1>
     <Link href="/atividades/atv-1">atividade 1</Link>
     <Link href="/atividades/atv-2">atividade 2</Link>
     <Link href="/atividades/atv-3">atividade 3</Link>
     <Link href="/atividades/atv-4">atividade 4</Link>
   </div>
   </div>
  );
}
