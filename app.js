function pesquisar(){
    let section = document.getElementById("resultados-pesquisa") 
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    if (!campoPesquisa) {
        section.innerHTML = "<P>Nada foi encontrado</pS>"
        return
    }
    campoPesquisa= campoPesquisa.toLowerCase()
    let resultados = ""
    let Nome = ""
    let Descricao = ""
    let Tags = ""
    for (let dado of dados){
        Tags = dado.Tags.toLowerCase()
        Nome = dado.Nome.toLowerCase()
        Descricao = dado.Descricao.toLowerCase()
        if(Nome.includes(campoPesquisa) || Descricao.includes(campoPesquisa) || Tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado">
                    <h2>${dado.Nome}</h2>
                    <p class="resposta">${dado.Descricao}</p>
                    <a href="${dado.Link}" target="_blank">Mais Informações</a>
                </div>  
                `
        } 
    }
    if(!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    section.innerHTML=resultados

    
}
       