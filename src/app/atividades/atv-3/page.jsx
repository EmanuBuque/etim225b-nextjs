"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [acao, setAcao] = useState("Cadastrar");

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Atividade 3</h1>

      <h2 className={styles.subtitle}>
        Ação selecionada: <span>{acao}</span>
      </h2>

      <div className={styles.buttonGroup}>
        <button
          className={`${styles.button} ${styles.green}`}
          onClick={() => setAcao("Cadastrar")}
        >
          Cadastrar
        </button>

        <button
          className={`${styles.button} ${styles.blue}`}
          onClick={() => setAcao("Editar")}
        >
          Editar
        </button>

        <button
          className={`${styles.button} ${styles.orange}`}
          onClick={() => setAcao("Listar")}
        >
          Listar
        </button>

        <button
          className={`${styles.button} ${styles.red}`}
          onClick={() => setAcao("Excluir")}
        >
          Excluir
        </button>

        <button
          className={`${styles.button} ${styles.gray}`}
          onClick={() => setAcao("Cancelar")}
        >
          Cancelar
        </button>
      </div>
    </main>
  );
}