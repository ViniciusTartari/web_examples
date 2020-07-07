// Examplo baseado no video "JavaScript Password Generator" - Traversy Media

// DOM
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

// Add event listener ao botao generate
generateEl.addEventListener("click", () => {
  const length = +lengthEl.value; // retorno padrao eh string, o "+" transforma pra numero =D
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  // Atribui o retorno da funcao ao campo no html
  resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
});

// Funcao copiar para clipboard
clipboardEl.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultEl.innerHTML;

  if (!password) return;

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard!');
})

// Funcao de geracao de password
function generatePassword(length, lower, upper, number, symbol) {
  // 1 - Inicializar pw var
  // 2 - Filtrar tipos a serem gerados
  // 3 - Loop de chamadas de geracao
  // 4 - Retornar password  gerada

  let generatedPassword = '';

  // Cria um vetor somente com as flags true
  const typesArr = [{
    lower
  }, {
    upper
  }, {
    number
  }, {
    symbol
  }].filter(
    item => Object.values(item)[0]
  );

  // Retorna nada se nao houver flags marcadas
  if (typesArr.length == 0) {
    return ''
  };

  // Loop de geracao
  for (let i = 0; i < length; i += typesArr.length) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    })
  }

  // Garante que retornara mesmo que o length seja menor que o tamanho do typesArr
  return generatedPassword.slice(0, length);
}

// Transforma a chamada da funcao como uma Key para acessa-las
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// Funcoes de geracao

function getRandomLower() {
  // "random" (0-1) * 26 (26 letras) + 97 (nro ascii do caracter "a")
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  // "random" (0-1) * 26 (26 letras) + 65 (nro ascii do caracter "A")
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  // "random" (0-1) * 10 (10 numeros) + 48 (nro ascii do caracter "0")
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  /* 
  Como os simbolos nao estao em ordem na tabela ascii, nao podemos fazer um "random" direto. Entao definimos uma string dos possiveis simbolos a serem utilizados.
  */
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}