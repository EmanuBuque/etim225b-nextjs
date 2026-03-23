'use client'

import { useState } from "react";

import styles from "./page.module.css";

export default function Exemplo03() {  

    const [num, setNum] = useState(100);

    function handleIncrementa () {
        setNum(num + 1);
    }
    function handlereducao(){
        setNum(num-1);
    }

    return (
      <div className={styles.container}>

            <h1>atividade 2</h1>
            <p>contador incrementando e decrementando</p>

            <label 
                onClick={() => handleIncrementa()}
                className={styles.botao}
            >+1</label>
            

            <label className={styles.texto}>{`Contador: ${num}`}</label>

            <label 
                onClick={() => handlereducao()}
                className={styles.botao}
            >-1</label>
            
        </div>
           
    );
}