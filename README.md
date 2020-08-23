# On9-Accenture-S3-Logica

Lógica - Loop, Escopo e Função

## Ignorando arquivos versionados

Você vai começar a instalar dependências durante o projeto mas não queremos que você _commite_ a pasta com os downloads.

Para isso vamos criar um arquivo `.gitignore`.

Neste arquivo vamos adicionar o seguinte conteúdo:

```
/node_modules
npm-debug.log*
/.vscode
```

Para saber mais sobre o `.gitiignore`, [este vídeo é bem curtinho](https://www.youtube.com/watch?v=UR9X2VBECE4)

## Trabalhando direto no ambiente do Node JS

Para pegar inputs no terminal precisamos baixar o `readline-sync` através do `npm`.

Para confirmar que o npm está instalado, você pode executar este comando no seu terminal:

```
npm -v
```

O npm é um gerenciador de pacotes para a linguagem de programação JavaScript.

Instalando o `readline-sync`

```
npm install readline-sync
```

Coloque essa linha no topo do arquivo do seu código:

```
const input = require("readline-sync");
```

Exemplo:

```javascript
const readlineSync = require("readline-sync");

// Para .
const nome = readlineSync.question("Qual o seu nome? ");
console.log("Oi " + nome + "!");

// Texto secreto (por exemplo, senha).
const comidaPreferida = readlineSync.question("Qual a sua comida preferia? ", {
  hideEchoBack: true, // O texto digitado na tela está oculto por `*`.
});
console.log(nome + " ama " + comidaPreferida + "!");
```

Saída

```
Qual o seu nome? Jô
Oi Jô!
Qual a sua comida preferia? *******
Jô ama sopa!
```

## Laços de repetição, os famosos _Loops_

- Você já se deparou com algo extremamente repetitivo e sonhou com um robô que automatizasse isso?

![Animação de uma pessoa carimbando folhas de papel em uma velocidade muito rápida](assets/stamping.gif)

- Alguma vez você teve que repetir a mesma coisa um monte de vezes e sonhou com a hora que a condição fosse mudar pra que você não precisasse repetir mais?

![Burrinho do Shreck perguntando se já esta chegando](assets/shrek.jpeg)

- Já pensou como sua vida seria mais fácil se pra toda coisa manual que você precisasse repetir alguém muito mais rápido fizesse isso por você?
  ![Esqueleto calculando quanto tempo falta para sua aposentadoria e anotando em um papel amarelo](assets/skull.gif)

Seus problemas acabaram!!!
Hoje você vai aprender como falar delegar para o JavaScript fazer tarefas repetitivas:

### Do while

O laço **do while** é usado quando não sabemos o número de vezes que devemos executar um bloco de código, mas apenas a condição que deve ser satisfeita para executar o bloco dentro do **do while**.

Essa condição é uma **expressão booleana** que deverá ser verdadeira para garantir a execução do bloco.

Este tipo de laço é usado quando queremos que um bloco de código seja executado pelo menos uma vez, dado que a condição para sua repetição é testada após a execução do bloco.

Exemplo:
Vamos simular uma estrutura de repetição for utilizando o **do while**:

```javascript
let result = "";
let counter = 0;

do {
  counter = counter + 1;
  result = result + counter;
} while (counter < 5);

console.log(result);
// expected result: "12345"
```

No exemplo a seguir, o usuário deve digitar `-1` para sair da estrutura de repetição:

```javascript
const readlineSync = require("readline-sync");

let numero;

do {
  numero = readlineSync.question("Digite qualquer número ou -1 para sair: ");
  console.log("Você digitou o número " + numero);
} while (numero != -1);

console.log("Tchau!");
```

### while

Assim como no laço **do while**, o laço **while** é usado quando não sabemos o número de vezes que devemos executar um bloco de código, mas apenas a condição que deve ser satisfeita para executar o bloco dentro do while.

Essa condição é uma expressão booleana que deverá ser verdadeira para garantir a execução do bloco.

Diferentemente do **do while**, se a condição não for satisfeita o bloco de código não será executado nenhuma vez, visto que a condição já é testada logo de início.

```javascript
let contador = 0;
while (contador <= 10) {
  console.log(contador);
  contador++; // não se esqueça desta linha!!!!
}
```

Observe que para ambos os laços, while e do while, caso utilizemos um contador, devemos tomar o cuidado de incrementá-lo porque se assim não o fizéssemos, a nossa aplicação entraria num loop infinito.

Também as declarações break e continue podem ser usadas da mesma forma que no laço for.

### For

O laço for tem as seguintes características:

- Uma variável de inicialização pode ser declarada dentro do for.
- Uma condição avalia uma expressão para abandonar o for ou executá-lo de novo.
- Uma expressão incrementa o valor da variável de inicialização.

Exemplo:

```javascript
for (let index = 0; index < 5; index++) {
  console.log("Iteração número " + index);
}
```

Para abandonar o laço antes que a condição for seja falsa, usa-se a palavra reservada **break**

Exemplo:
