document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  const participantsList = document.getElementById('participants');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    console.log('Formulário enviado!');

    // Obter valores dos campos do formulário
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;

    console.log('Valores do formulário:', name, age, contact, email);

    // Criar uma nova linha na tabela de participantes
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${new Date().toLocaleDateString()}</td>
      <td>${new Date().toLocaleString()}</td>
    `;

    // Adicionar a nova linha à lista de participantes
    participantsList.appendChild(newRow);

    console.log('Participante adicionado à lista!');

    // Limpar campos do formulário após a submissão
    form.reset();
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const participantsList = document.getElementById('participants');

  // Função para adicionar um participante à lista
  function addParticipant(name, registrationDate, checkInDateTime) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${registrationDate}</td>
      <td>${checkInDateTime}</td>
    `;
    participantsList.appendChild(newRow);
  }

  // Adicionando participantes à lista
  addParticipant('Shopia Emanuelle', '2024-04-28', '2024-04-28 10:00:00');
  addParticipant('Joabe Carvalho', '2024-04-28', '2024-04-28 11:00:00');
});