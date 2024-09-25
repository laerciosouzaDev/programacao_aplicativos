var tarefas = [];

function addTarefa(){
    const input  = document.getElementById("tarefa-text");
    const tarefaTexto = input.value.trim();

    if(tarefaTexto === ""){
        alert("voce tentou adicionar uma tarefa sem texto.");
        return;
    }

    const novaTarefa = {
        id: Math.floor(Math.random() * 100000),
        text: tarefaTexto,
        completo: false

    }
    tarefas.push(novaTarefa);
    console.log(tarefas)
    input.value = "";
    input.focus();
}

function reder(){
    const listaTarefa = document.getElementById("lista-tarefa");

    for(var i = 0; i < tarefas.length;i++){
        const li = document.createElement("li");

        if(tarefas[i].completo === true){
            li.classList.add("completo")
        }

        const span = document.createElement("span");
        span.textContent = tarefas[i].text;

        const concluir = document.createElement("button")
        concluir.textContent = tarefas[i].completo ? "desmarcar" : "concluir";
        concluir.classList.add("check")

        const edit = document.createElement("button")
        concluir.textContent = "edit"
        concluir.classList.add("edit")

        const delete = document.createElement("button")
        concluir.textContent = "delete";
        concluir.classList.add("delete")
    }
}