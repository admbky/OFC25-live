fetch('data/vysledky.json')
  .then(res => res.json())
  .then(data => {
    renderTabulka(data.skupinaA, 'tabulkaA');
    renderTabulka(data.skupinaB, 'tabulkaB');
  });

function renderTabulka(data, tableId) {
  const tbody = document.querySelector(`#${tableId} tbody`);
  tbody.innerHTML = '';
  data.forEach(tim => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${tim.tim}</td>
      <td>${tim.body}</td>
      <td>${tim.v}</td>
      <td>${tim.r}</td>
      <td>${tim.p}</td>
      <td>${tim.g}</td>
    `;
    tbody.appendChild(row);
  });
}
