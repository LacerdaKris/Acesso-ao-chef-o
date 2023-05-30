function solucao(itensColetados, ...necessarios) {
  //verifica se cada um dos itens necessários consta no array
  var possuiTodos = necessarios.every(function(item) {
    return itensColetados.includes(item);
  });
  return possuiTodos ? "PODE ENFRENTAR" : "NÃO PODE ENFRENTAR";
}

var itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete"];
var itemNecessario1 = "machado";
var itemNecessario2 = "espada";
var itemNecessario3 = "sapato";

var aptidao = solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3);
console.log(aptidao);
