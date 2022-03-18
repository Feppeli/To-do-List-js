

const recebendoTarefa = document.querySelector('#searchBox') /* Tarefa */


function add(){
    
    //Deixando a Primeira letra maiúscula
    var texto = recebendoTarefa.value
    var tarefaFinal = texto.charAt(0).toUpperCase() + texto.substr(1)
    


    // criando item
    var item = document.createElement('label')   
    item.innerHTML = `
    <input id="check" type="checkbox">
    <div>${tarefaFinal}</div>
    <button id="apagar" >X</button>
    `

    // dandno classe ao item
    item.classList.add('toDoItem')
    document.getElementById('tarefas').appendChild(item)

    
}   
