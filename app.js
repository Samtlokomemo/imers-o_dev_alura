function pesquisar() {
    
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    if(!campoPesquisa){
      section.innerHTML = "<p>Nada foi encontrado.</p>"
      return
    }

    campoPesquisa = campoPesquisa

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
  
    // Itera sobre os dados dos jogos
    for (let dado of dados) {
      if(dado.nome.toLocaleLowerCase().includes(campoPesquisa.toLowerCase()) || dado.descricao.toLocaleLowerCase().includes(campoPesquisa.toLowerCase())){
          // Constrói o HTML para cada jogo, utilizando template literals para inserir os dados
          resultados += `
          <div class="item-resultado">
            <a href="${dado.link}" target="_blank">
              <img src="${dado.imagem}" alt="${dado.nome}">
            </a>
            <div class="descricao-meta">
              <h2>${dado.nome}</h2>
              <p>${dado.descricao}</p>
            </div>
          </div>
        `;
      }
      
    }
    if(!resultados){
      resultados = "<p>Nada foi encontrado.</p>"
    }
  
    // Insere o HTML gerado na seção
    section.innerHTML = resultados;
  }

