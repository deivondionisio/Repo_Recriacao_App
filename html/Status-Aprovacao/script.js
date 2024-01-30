const transactions = [
    {
        src: 'assets/nate.jpg',
        name: 'Nate Conor',
        num_pedido: '750',
        email: 'nate@cmaa.ind.br',
        status: 'Criada',
        date: '2023-10-22T22:05:00Z',
        num_req: '24680'
    },
    {
        name: 'Melissa Brantley',
        num_pedido: '220',
        src: 'assets/melissa.jpg',
        email: 'melissa@cmaa.ind.br',
        status: 'Criada',
        date: '2023-10-24T19:05:00Z',
        num_req: '13579'
    },
    {
        name: 'Ryan Stewart',
        num_pedido: '640',
        src: 'assets/ryan.jpg',
        email: 'ryan@cmaa.ind.br',
        status: 'Criada',
        date: '2023-10-29T20:05:00Z',
        num_req: '78901'
    },
    {
        src: 'assets/laura.jpg',
        name: 'Laura Smith',
        num_pedido: '756',
        email: 'laura@cmaa.ind.br',
        date: '2023-11-28T23:05:00Z',
        status: 'Criada',
        num_req: '65432'
    },
];

transactions.sort((a, b) => {
    return a.num_pedido - b.num_pedido;
});

const tableWidget = document.querySelector('.table-widget');

const itemsOnPage = 10;

const numberOfPages = Math.ceil(transactions.length / itemsOnPage);

const start = (new URLSearchParams(window.location.search)).get('page') || 1;

const mappedRecords = transactions
    .filter((_, i) => (
        ((start - 1) * itemsOnPage) < i + 1) &&
        (i + 1 <= start * itemsOnPage)
    )
    .map((teamMember) => {
        let numReqColumn = '';

        if (teamMember.status === 'Aprovada') {
            numReqColumn = `
                <td>
                    ${teamMember.num_req}
                </td>`;
        }

        return `<tr>
            <td class="team-member-profile">
                <img
                    src="${teamMember.src}"
                    alt="${teamMember.name}"
                >
                <span class="profile-info">
                    <span class="profile-info__name">
                        ${teamMember.name}
                    </span>
                    <span class="profile-info__alias">
                        ${teamMember.email}
                    </span>
                </span>
            </td>
            <td>
                ${teamMember.num_pedido}
            </td>
            <td>
                <span class="status status--${teamMember.status}">
                    ${teamMember.status}
                </span>
            </td>
            <td>
                ${new Date(teamMember.date).toLocaleDateString('en-us', {
                    'weekday': 'short',
                    'year': 'numeric',
                    'month': 'short',
                    'day': 'numeric',
                    'hour': 'numeric',
                    'minute': 'numeric',
                })}
            </td>
            <td>
            
            </td>
            ${numReqColumn}
        </tr>`;
    });

const linkList = [];

for (let i = 0; i < numberOfPages; i++) {
    const pageNumber = i + 1;
    linkList.push(
        `<li>
            <a
                href="?page=${pageNumber}"
                ${pageNumber == start ? 'class="active"' : ''}
                title="page ${pageNumber}">
                ${pageNumber}
            </a>
        </li>`
    );
}

const table = DOMPurify.sanitize(`
    <table>
        <caption>
            Transações
            <span class="table-row-count">(${transactions.length})</span>
        </caption>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Número Do Pedido</th>
                <th>Status</th>
                <th>Data do Pedido</th>
                <th>Atender Pedido</th>
            </tr>
        </thead>
        <tbody id="table-rows">
            ${mappedRecords.join('')}
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5">
                    <ul class="pagination">
                        ${linkList.join('')}
                    </ul>
                </td> 
            </tr>
        </tfoot>
    </table>
`);

tableWidget.innerHTML = table;

function addVerificarButton() {
    const tableRows = document.querySelectorAll('.table-widget table tbody tr');

    tableRows.forEach((row) => {
        const atenderPedidoColumn = row.querySelector('td:last-child');
        const verificarButton = document.createElement('button');
        verificarButton.className = 'btn btn-danger button verificar-button'; // Adicione a classe "verificar-button" aqui
        verificarButton.innerHTML = '<strong>Ver Detalhes</strong>'; // Use a tag <strong> para o texto em negrito
        verificarButton.onclick = function() {
            AtenderPedido(this);
        };
        atenderPedidoColumn.appendChild(verificarButton);
    });
}

// Chame a função para adicionar o botão "Verificar"
addVerificarButton();


