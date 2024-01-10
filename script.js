const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-tasks')
const completeList = document.querySelector('.list-task')


let myItemList = []

function addNewItem() {
    if (input.value.trim() !== "") {
        myItemList.push({
            newTask: input.value,
            concludedTask: false
        });

        input.value = ''
        showItens()
    }
    else {
        alert("Please, write something before adding a task.");
    }

}

function showItens() {

    let newLi = ''

    myItemList.forEach((item, index) => {

        newLi = newLi + `  
        <li class="task ${item.concludedTask && "done"}">
            <img src="./img/tick.png" alt="an image of a green tick" onclick ="taskConcluded(${index})">
            <p> ${item.newTask}</p>
             <img src="./img/error.png" alt="an image of a error tick" onclick ="deleteItem(${index})">
        </li>
   `
    })


    completeList.innerHTML = newLi
    localStorage.setItem('lista', JSON.stringify(myItemList))
}


function taskConcluded(index) {
    myItemList[index].concludedTask = !myItemList[index].concludedTask

    showItens()

}


function deleteItem(index) {

    myItemList.splice(index, 1)

    showItens()
}


function reloadItensStorage() {
    const functionOfStorageplace = localStorage.getItem('lista')

    if (functionOfStorageplace) {
        myItemList = JSON.parse(functionOfStorageplace)
    }


    showItens()
}

reloadItensStorage()

button.addEventListener('click', addNewItem)