document.querySelector('.btn-add').onclick = function(){
    if(document.querySelector('.container-titles input').value.length === 0){
        alert("Enter a Task")
    }
    else{
        document.querySelector('.add-task').innerHTML += `
                <li class="taskname">
                    ${document.querySelector('.container-titles input').value}
                </li>
           
        `;
    }

    document.querySelector('.container-titles input').value = "";

    const findTasks = document.querySelectorAll('.taskname')
    findTasks.forEach((task)=>task.addEventListener('click', ()=>{task.classList.toggle('completed')}))

    
    document.querySelector('.btn-clear-completed').onclick = function(){
        let deleteCompletedTask = document.querySelectorAll('.completed')
        deleteCompletedTask.forEach((e)=>e.remove())
        
        
    }
    
}

document.querySelector('.btn-empty-list').onclick = function(){
    const deleteTasks = document.querySelector('.add-task')
    deleteTasks.innerHTML = ''
}





