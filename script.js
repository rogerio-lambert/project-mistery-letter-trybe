// Bloco de declaração de variáveis globais

const letterText = document.getElementById('carta-texto');
const letter = document.getElementById('carta-gerada');
const createButton = document.getElementById('cria-carta');

// Bloco de declaração de funções

function changeStyle() {

}

function randonCasses() {
  let classes = '';
  const style = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['', ' medium', ' big', ' reallybig'];
  const rotetion = ['', ' rotateleft', ' rotateright'];
  const inclination = ['', ' skewleft', ' skewright'];
  classes += style[Math.round(Math.random() * 2)];
  classes += size[Math.round(Math.random() * 3)];
  classes += rotetion[Math.round(Math.random() * 2)];
  classes += inclination[Math.round(Math.random() * 2)];
  return classes;
}

function createLetter() {
  const content = letterText.value.match(/\w+/g);
  if (content === null) {
    letter.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    for (let index = 0; index < content.length; index += 1) {
      const word = document.createElement('span');
      word.innerText = content[index];
      word.addEventListener('click', changeStyle);
      word.className = randonCasses();
      letter.appendChild(word);
    }
  }
}

// BLoco de criação de escutadores de eventos

createButton.addEventListener('click', createLetter);

// de ações de inicialização
