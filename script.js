function criarTarefa(){
    let tarefa = document.querySelector("#campo_texto").value;
//    let cor = #FFF;
    let data = new Date();
    var key = "tarefa_" + data.getTime();
    let t = {
        "key": key,
        "tarefa": tarefa,
//        "cor": cor
    }
    localStorage.setItem(key, JSON.stringify(t));
    adicionarTarefaDOM(t);
}

function adicionarTarefaDOM(t){
        let quadro = document.createElement("li");
        let tarefas = document.querySelector("#tarefas");
        quadro.classList.add("quadro");
        quadro.id = t.key;
        quadro.innerHTML = t.tarefa;
//        quadro.style.backgroundColor = t.cor;
        quadro.ondblclick = excluirTarefa;
//        quadro.style.transform = "rotate(" + Math.random()*6 + "deg)";
        tarefas.appendChild(quadro);
}

function excluirTarefa(e){
    let key = e.target.id;
    let quadro = document.getElementById(key);
    let tarefas = document.querySelector("#tarefas");
    localStorage.removeItem(key);
    tarefas.removeChild(quadro);
}

let botaoAdicionar = document.querySelector("#botao_adicionar");
botaoAdicionar.addEventListener("click", criarTarefa);