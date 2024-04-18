import React from 'react';
import style  from './contato.module.css';

export default function ContatoPage() {
  return (
  
    <head>

      <div className={style.container_contatos}>
        <h1>Entre em Contato</h1>

        <form>
          <label htmlFor="nome">Nome:</label>
          <input className={style.escrever} type="text" id="nome" name="nome" />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input className={style.escrever} type="email" id="email" name="email" />
          <br />
          <br />
    
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea className={style.escrever} id="mensagem" name="mensagem" placeholder="Digite sua sugestão"></textarea>
          <br />
          <br /> 
          <button className={style.button}>Enviar</button>


        </form>
      </div>
    </head>
  );
}
