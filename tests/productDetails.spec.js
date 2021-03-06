/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const array = productDetails();
    assert.strictEqual(typeof array, 'object');

    // assert.deepStrictEqual(Array.isArray(array), true);

      // Tirar dúvida no plantão: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
      // O método Array.isArray() retorna true se um objeto é uma array, e false se não é.

      // Sintaxe
      // Array.isArray(obj)

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(array.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof array[0], 'object');
    assert.strictEqual(typeof array[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepEqual(array[0].name, array[1].name);
    assert.notDeepEqual(array[0].details, array[1].details);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.ok(array[0].details.productId.endsWith('123'));
    assert.ok(array[1].details.productId.endsWith('123'));
  });
});
