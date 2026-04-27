'use client';

import { useState } from 'react';
import styles from './page.module.css';

function Atividade05() {
  const [inputValue, setInputValue] = useState({
    id: '',
    produto: '',
  });
  const [dadosCadastrados, setDadosCadastrados] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.produto) return;

    const novoItem = { ...inputValue, id: Date.now() };
    setDadosCadastrados([...dadosCadastrados, novoItem]);

    setInputValue({ id: '', produto: '' });
  };


  const excluirItem = (id) => {
    setDadosCadastrados(dadosCadastrados.filter(item => item.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Mockup Crud Vite</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue.produto}
          onChange={(e) => setInputValue({ ...inputValue, produto: e.target.value })}
          placeholder="Produto..."
        />
        <button type="submit">Adicionar</button>
      </form>

      {dadosCadastrados.length > 0 && <h2>Lista de compras</h2>}

      <ul className={styles.lista}>
        {dadosCadastrados.map((item) => (
          <li key={item.id} className={styles.linha}>
            <span className={styles.conteudo}>
              {item.quantidade}x {item.produto}
            </span>
            <button 
              onClick={() => excluirItem(item.id)}
              className={styles.btnExcluir}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Atividade04;