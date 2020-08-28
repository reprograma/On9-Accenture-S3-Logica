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

```javascript
for (let index = 0; index < 5; index++) {
  console.log("Iteração número " + index);
  if (index === 3) {
    break;
  }
}
```

A palavra reservada **continue** permite que o fluxo de execução da iteração corrente seja abandonado, mas não o laço, e a iteração seguinte dê início no topo do laço, uma vez que a condição do for seja satisfeita.

```javascript
for (let index = 0; index < 5; index++) {
  if (index === 3) {
    continue;
  }
  // a linha abaixo não será impressa quando i = 3
  console.log("Iteração número " + index);
}
```

### For em decremento

Também podemos implementar laços cuja variável de controle decrementa em lugar de incrementar.

```javascript
for (let index = 10; index >= 0; index--) {
  console.log(index);
}
```
## Extra: aprenda a aprender:

Esta aula foi pesadíssima, eu sei.
Como sugestão para diversificar seu aprendizado, deixo algumas sugestões:

### For. While e Do While
#### Free Code Camp (em inglês)
- Entre na [página do free code camp](https://www.freecodecamp.org/learn)
- Navegue até a sessão **JavaScript Algorithms and Data Structures Certification (300 hours)**
- Na sessão **Basic JavaScript**, faça os seguintes exercícios:
  - Iterate with JavaScript While Loops
  - Iterate with JavaScript For Loops
  - Iterate Odd Numbers With a For Loop
  - Count Backwards With a For Loop
  - Iterate Through an Array with a For Loop
  - Nesting For Loops
  - Iterate with JavaScript Do...While Loops

#### Insegura com o inglês? Seguem alguns vídeos em português:
- [Comando de loop FOR](https://youtu.be/3DLDoCtje9o)
- [Comando de loop WHILE](https://youtu.be/ZCjUZk9Xfw4)
- [Comando de loop DO WHILE](https://youtu.be/9cNRNlhb-EA)

***

## Funções

O que é uma função?
Uma função é um bloco de código/instruções. Usando funções, podemos "chamar" o código que queremos executar, quando queremos executar, e dando para o código as informações que ele precisa.
Por exemplo:

```js
//uma função que receba dois números e faça uma soma

//primeiro momento: declarar a função - ou seja, escrever o que ela faz
function soma(numero1, numero2) {
  return numero1 + numero2;
}

//segundo momento: "chamar" a função quando queremos que ela seja executada
soma(1, 1);
//resultado: 2
```

Essa é a estrutura de uma função "clássica". Existem outros jeitos de declarar funções mas vamos entender esse primeiro.

- `function nomeDaFuncao(parametro1, parametro2)`: A palavra-chave `function` avisa o JS que vamos começar a escrever uma função aqui. Em seguida, `nomeDaFuncao` é o nome que vamos dar para ela. Você pode dar o nome que quiser, só não esqueça de seguir a convencaoDeNomesCamelCase 🐪 e de dar pra função **um nome que faça sentido** - ou seja, que diga o que a função faz.
- O trecho entre parênteses são os **parâmetros** `(parametro1, parametro2)`. Você pode dar o nome que quiser também, desde que façam sentido. Os parâmetros são _muito importantes_ pois é através deles que a função recebe as informações que precisa para fazer o que queremos. **Importante também**: as funções podem não receber parâmetro nenhum, caso não precise, ou receber quantos precisar. Não tem número mínimo nem máximo.
- A palavra-chave `return` também é muito importante: é ela que "manda pra fora" da função a informação que queremos. Sem o retorno, a função pode fazer várias tarefas, mas nenhum dado que ela processar vai poder ser acessado pelo restante do código.
- Os "momentos": Lembra que usamos funções para que certos trechos de código só sejam executados no momento certo? Então a função também tem dois momentos. No primeiro, quando ela é declarada, escrevemos tudo: nome, o que faz, o que retorna. No segundo momento, quando "chamamos" a função passando os valores que ela precisa, é que ela é executada. _A função não vai ser nunca executada se não chamarmos!_

Abaixo temos mais exemplos para entendermos melhor cada caso.

1. Função sem retorno e sem parâmetro:

```js
function olar() {
  console.log("oi gente!");
}

olar();
```

2. Função sem retorno, com parâmetro:

```js
function olarPessoa(pessoa) {
  console.log(`oi, ${pessoa}!`);
}

olarPessoa("Helena");
```

3. Função com retorno, sem parâmetro:

```js
function escreverOlar() {
  return "oi gente!";
}

function escreverOlarPraAlguem(nomePessoa) {
  console.log(`${escreverOlar()} Meu nome é ${nomePessoa}`);
}

escreverOlarParaAlguem("Helena");
```

4. Função com mais de um parâmetro:

```js
function operacaoMatematica(numero1, numero2, numero3) {
  return numero1 + numero2 + numero3;
}

operacaoMatematica(1, 1, 1);
```

### Return x Console

Qual a diferença entre `return` e `console.log()`?

O `console.log` significa, traduzindo do inglês, "registro no console". Ou seja, é somente um registro pra gente que está desenvolvendo obter alguma informação do código, mas _o `console.log()` não influencia no código, é só pra dar informação!_

Já o `return` é o comando que usamos quando realmente precisamos que a função "mande pra fora dela" algum dado que precisamos usar em outra parte do código. Ele deve ser sempre a última coisa a ser escrita na última linha antes de fechar a função, pois tudo que vem depois desse comando é ignorado pelo JS.

Em alguns dos casos acima (casos 1 e 3), a própria função já define `console.log()` então a informação já vai ser exibida no console. Já no caso 4, se quisermos conferir o retorno da função no console, devemos chamá-la no formato: `console.log(operacaoMatematica(1, 1, 1))`.

### Declaração de Função x Expressão de função

A forma que acabamos de ver (que chamei de "clássica") é a que chamamos de declaração de função, com a palavra-chave `function` e depois o nome que damos pra função.

Outra forma de escrever funções:

```js
const olar = function () {
  console.log("oi gente!");
};

olar();
```

Ou, utilizando parâmetros:

```js
const soma = function (numero1, numero2) {
  return numero1 + numero2;
};

console.log(soma(1, 1)); //resultado: 2
```

Qual a diferença?

Nessa versão, a função em si não tem nome (é uma função anônima) e chamamos através de uma variável. De resto, escrevemos de forma parecida.

A diferença está num comportamento do JS chamado içamento, ou _hoisting_. Quando o arquivo JS é carregado, todas as funções declaradas (que têm nome) são içadas, ou puxadas para o topo do contexto.

O que? Traduzindo, é como se, quando o arquivo fosse carregado, o JS puxasse para o começo do código todas as funções que têm nome e já gravasse todas elas. Então não importa em que parte do código elas são chamadas, o JS já sabe o que elas fazem.

Já as expressões (esse último caso que vimos) são anônimas, então o JS não sabe o que elas fazem até que chegue na linha certa. Na prática:

```js
funcaoDeclarada();

function funcaoDeclarada() {
  console.log("essa função já foi carregada!");
}
```

Você pode tranquilamente chamar a função antes de declarar o que ela faz, pois o JS quando carregar o arquivo vai _primeiro_ puxar pro topo as funções nomeadas, ler o que elas fazem e aí então executar o código.

Já no caso das expressões de função:

```js
expressaoDeFuncao();

const expressaoDeFuncao = function () {
  console.log("será que funcionou?");
};
```

Se você rodar o código como está, vai receber um erro do tipo `expressaoDeFuncao is not defined` ("expressaoDeFuncao não está definido") porque o JS não consegue chamar uma função antes de ler o que ela faz, e uma coisa está depois da outra. Troque as linhas de lugar e tudo volta a funcionar!

### Arrow Functions (função seta)

Por fim, uma última forma (por enquanto!) de se escrever funções. Essa forma veio com as implementações mais recentes do JS, o tal ES6 ou JS2015 e é chamada de _arrow function_, por ser caracterizada pela `=>` (arrow, ou seta/flecha).

Essa forma pode a princípio parecer um pouco estranha de escrever, mas você vai se acostumando! Comece pela forma que acha mais confortável.

A _arrow function_ é uma outra forma de se escrever somente **expressões de função**.

O jeito tradicional de escrever:

```js
const soma = function (num1, num2) {
  return num1 + num2;
};
console.log(soma(1, 1)); //2
```

Utilizando _arrow function_:

```js
const soma = (num1, num2) => num1 + num2;
console.log(soma(1, 1)); //2
```

Nessa versão:

- não utilizamos a palavra-chave `function`
- a seta `=>` que indica função vai _depois_ dos (parâmetros)
- como o código da função só tem uma linha, não precisamos abrir e fechar chaves `{}` e nem escrever `return` (fica implícito)

Caso a função tenha mais de uma linha, aí sim precisamos abrir chaves e escrever `return`, mesmo usando a `=>`:

```js
const imprimirSomaEPessoa = (num1, num2, nome) => {
  const resultadoSoma = num1 + num2;
  return `resultado: ${resultadoSoma}, pessoa: ${nome}`;
};
console.log(imprimirSomaEPessoa(1, 1, "Helena"));
```

### iife

**IIFE (Immediately Invoked Function Expression), ou funções imediatas**

É uma forma de declarar uma função e já executá-la em seguida, sem precisar chamar a função em uma outra linha de código. Pode funcionar tanto com expressões ou com funções declaradas. Basta envolver toda a função com parênteses e incluir parênteses vazios no final:

```js
const imprime = (function () {
  let nome = "Helena";
  return nome;
})();
console.log(imprime);
```

Nesse exemplo, a variável `imprime` não guarda a função e sim _somente seu resultado_. O que está sendo exibido no console em `console.log(imprime)` é justamente esse resultado.

Vamos ver outro exemplo:

```js
(function imprime() {
  let nome = "Helena";
  console.log(nome);
})();
```

Também vai funcionar com funções nomeadas, mas o normal é utilizar com _expressões_.
Você também pode escrever com os parênteses vazios para dentro, dessa forma.

```js
const imprime = (function () {
  let nome = "Helena";
  return nome;
})();
```

### Dicas

Algumas dicas de funções que você pode levar pra vida:

Listamos alguns princípios que te vão te ajudar a escrever funções melhores:

- **Don't Repeat Yourself (DRY)**: É muito comum que a gente identifique um padrão que se repete ao longo de nosso código.

Uma vez identificado um padrão - por exemplo, se você escreveu dois pedaços de código muito parecidos, é hora de escrever uma função que faça um "modelo" do padrão encontrado para que seja reutilizado facilmente.

- **Do One Thing (DOT)**: Cada função deve fazer somente uma coisa e fazê-la o melhor possível. Seguindo este princípio, você escreverá funções mais reutilizáveis, legíveis e fáceis de debugar.

- **Keep It Simple Stupid (KISS)**: Se as funções devem fazer somente uma coisa, quanto mais claro e mais simples, melhor. Nem sempre é fácil fazer isso, especialmente quando estamos começando. Praticar sempre!

- **Less Is More**: Para serem o mais legíveis possível e reduzir a
  tentação de fazer mais de uma coisa, as funções devem ser tão pequenas quanto for possível. Se a função fica muito longa, é melhor considerar separá-la.

### Links

Alguns links e referências.
Esses links têm bastante conteúdo, vá se familiarizando aos pouquinhos!

- [Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es) no MDN
- [Vários exemplos](https://braziljs.org/artigos/funcoes-em-javascript/) de funções no site da BrazilJS. Algumas informações são específicas do JS no front-end, então não se preocupe se tiver muita coisa desconhecida!
- [Capítulo inteiro de funções](https://braziljs.github.io/eloquente-javascript/chapters/funcoes/) do livro JavaScript Eloquente

---

## Escopos

Escopo é como chamamos o contexto onde as coisas acontecem no código. Ou seja, onde cada trecho de código é lido, interpretado e pode ser acessado.

Antes, no JavaScript podíamos apenas criar um novo escopo quando criavamos
uma nova função. Mas desde a atulização do ES6 (ES2015) temos a `let` e a
`const`, que introduziram o conceito de _escopo de bloco_ no JavaScript. Um bloco de código é definido por estar entre chaves `{}`.

O tema de escopo é complexo, então vamos ver um exemplo prático:

```js
const exemplo = () => {
  let x = 1;
};
exemplo();
console.log(x);
```

Aqui, o escopo direto de `x` é a função `exemplo`. A variável `x` poderá ser acessada apenas dentro do bloco da função `exemplo`, mas não fora dela. Faça o teste com esse código, vai ver o erro `x is not defined`. Isso acontece porque `let x` foi criada _dentro do escopo de bloco da função `exemplo`_ e só consegue ser acessada (ou visível) dentro da função - ou seja, entre as chaves `{}`.

Vamos ver de novo:

```js
const exemplo = () => {
  let x = 1;
  console.log(x);
};
exemplo();
```

Agora sim.

### Nested Scopes (escopos aninhados)

Se o escopo está aninhado dentro do escopo direto de uma variável, a
variável será acessível a todos os escopos:

```js
function textoExterno(texto) {
  console.log(texto);
  function textoInterno() {
    const frase = "texto da função aninhada";
    console.log(frase);
  }
  textoInterno();
}
textoExterno("olar");
```

### Sombreamento

É possível declarar uma variável com o mesmo nome em um escopo interno
de uma função, com isso o acesso à variável externa é bloqueado no escopo
interno e todo os escopos aninhados dentro dela. Mudanças nas variáveis internas
não afetam a variável externa, que é acessível fora do escopo interno.
Exemplo:

```js
let variavel = "global";
function exemplo() {
  let variavel = "local";
  console.log(variavel); // local
}
exemplo();
console.log(variavel); // global
```

Dentro da função `exemplo`, a variável global `variavel` é "sombreada" pela variável local `variavel`.

### Declaração de variáveis no escopo local com `let`

A "palavra" `let` declara uma variável de alcance local. Ela pode, opcionalmente,
ser iniciada com algum valor e pode ser reatribuída (diferente de `const`).

O alcance da `let` é local ao bloco, a declaração ou expressão onde se está
usando. O que diferencia a palavra `let` da palavra `var` é que `var` não respeita o escopo de bloco e pode "escapar" quando menos esperamos (causando bugs).

Alguns exemplos:

```js
(function () {
  if (true) {
    let frase = "Olar mundo";
  }
  console.log(frase);
})();
```

O exemplo acima vai dar erro, porque `let` só existe dentro do _escopo de bloco_ do `if` (lembrando que um bloco de código é definido pelas `{}` e não precisa ser necessariamente uma função!).

Se tentarmos novamente com `var`:

```js
(function () {
  if (true) {
    var frase = "Olar mundo";
  }
  console.log(frase);
})();
```

Agora a função roda normalmente e exibe a mensagem, pois `var`, ao contrário de `let` e `const` não liga muito pra escopo.

Bom, então `var` é melhor né? **Não!** Nós normalmente não queremos esse comportamento, pois quanto mais "cercadas" as variáveis estiverem no código, menor a chance de comportamentos inesperados e de encontrarmos valores que não esperamos dentro das variáveis.

Então, nada de `var`! As variáveis `let` e `const` surgiram justamente pra atender a essa necessidade de maior organização no código.

### Links

- Uma geral sobre [escopos](<https://pt.wikipedia.org/wiki/Escopo_(computa%C3%A7%C3%A3o)>) na Wikipedia

---


```js
