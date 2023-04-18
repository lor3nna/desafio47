//PARTE 1 DO DESAFIO
//Função Ordena as colunas da Tabela 

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementsByTagName("table")[0];
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }



//PARTE 2 DO DESAFIO
//FUnção Filtragem da Tabela: 
//Foi criada no arquivo html e css uma barra de pesquisa acima da tabela para permitir que os usuários filtrem as equipes pelo nome
// Em seguida, utilizamos o JS para criar a Função Filter Table
// Essa função basicamente filta a tabela de dados HTML de acordo com o que é digitado pelo usuário

function filterTable() {  //Declaração da função
var valor_digitado, filtro, table, tr, td, i, txtValue; //declaração de variáveis utilizadas na função
valor_digitado = document.getElementById("myInput"); // A variável que criamos recebe a referência para o elemento HTML com o id "myInput" 
//(Esse elemento 'myInput' é um campo de texto onde o usuário digita o termo de pesquisa)
filtro = valor_digitado.value.toUpperCase(); // Para facilitar a comparação com os dados da tabela, o valor digitado pelo usuário é conertido para letras maiúsculas
table = document.getElementsByTagName("table")[0];
tr = table.getElementsByTagName("tr");
for (i = 0; i < tr.length; i++) {
  td = tr[i].getElementsByTagName("td")[2];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filtro) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
}