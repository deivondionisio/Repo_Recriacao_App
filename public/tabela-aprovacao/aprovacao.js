// Este arquivo irá manipular a aprovação do pedido e preencher a tabela com os dados do pedido

function aprovarPedido() {
    // Solicitar o número de requisição
    const numeroRequisicao = prompt("Por favor, insira o número da requisição:");

    // Verificar se o número de requisição é um valor numérico
    if (numeroRequisicao === null) {
        // O usuário pressionou "Cancelar", não faça nada
    } else if (numeroRequisicao === "" || isNaN(numeroRequisicao)) {
        // Número de requisição em branco ou não numérico
        alert("Número de requisição inválido. Certifique-se de inserir um valor válido.");
    } else {
        // Número de requisição válido, lógica para aprovar o pedido
        alert("Pedido aprovado com sucesso!");
    }
}

  
  function rejeitarPedido() {
    // Lógica para rejeitar o pedido, você pode implementar isso
    // Isso pode envolver o envio de dados para um servidor, atualização de um banco de dados, etc.
    alert("Pedido rejeitado!");
  }
  
  // Função para preencher a tabela com os dados do pedido
  function preencherTabelaPedido(dadosPedido) {
    const tabelaPedido = document.getElementById("pedido-corpo");
  
    for (const pedidoItem of dadosPedido) {
      const row = tabelaPedido.insertRow();
      for (const key in pedidoItem) {
        if (pedidoItem.hasOwnProperty(key)) {
          const cell = row.insertCell();
          cell.innerHTML = pedidoItem[key];
        }
      }
  
      // Adicione a caixa de seleção para cada linha
      const acaoCell = row.insertCell();
      const select = document.createElement("select");
      select.name = "acao";
      select.innerHTML = '<option value="Conforme">Conforme</option><option value="Não Conforme">Não Conforme</option>';
      acaoCell.appendChild(select);
    }
  }
  
  // Simule a recuperação dos dados do pedido do código anterior
  const dadosPedido = [
    { Item: "Produto A", Quantidade: "3", Tamanho: "M", Devolucao: "Sim" },
    { Item: "Produto B", Quantidade: "2", Tamanho: "L", Devolucao: "Não" },
    // Adicione mais linhas conforme necessário
  ];
  
  // Preencha a tabela com os dados do pedido
  preencherTabelaPedido(dadosPedido);
  