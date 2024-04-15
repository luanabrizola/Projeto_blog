
export default function ContatoPage() {
  return (
    <head>
      <script src="./script.js"></script>
      <div className="container_contatos">
        <h1>Entre em Contato</h1>

        <form>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" />
          <br />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />
          <br />
    
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" placeholder="Digite sua sugestão"></textarea>
          <br />
          <br /> 
          <button onclick="exibirMensagemEAtualizar()">Enviar</button>

        </form>
      </div>
    </head>
  );
}
