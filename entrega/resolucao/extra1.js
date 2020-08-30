// 1. crie uma função que receba um número qualquer devolva o seguinte padrão como resultado (inclusive com os espaços). Por exemplo, caso receba o número 6 como parâmetro:

// ```
// *
// **
// ***
// ****
// *****
// ******
// ```

function starships(num) {
  let stars = "";
  for (let line = 0; line <= num; line++) {
    stars += "*";
    console.log(stars);
  }
}

starships(6);
