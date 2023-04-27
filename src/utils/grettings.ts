export const greetings = () => {
  const horaAtual = new Date().getHours();
  let msg = '';

  switch (true) {
    case horaAtual >= 0 && horaAtual <= 6:
      msg = 'Boa Madrugada';
    case horaAtual > 6 && horaAtual <= 12:
      msg = 'Bom dia';
      break;
    case horaAtual > 12 && horaAtual <= 18:
      msg = 'Boa tarde';
      break;
    case horaAtual > 18 && horaAtual <= 24:
      msg = 'Boa noite';
      break;
  }

  return msg;
};
