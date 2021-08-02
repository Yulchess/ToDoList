document.querySelector('.btn-add').onclick = function(){
    if(document.querySelector('.container-titles input').value.length == 0){
        alert("Enter a Task")
    }
    else{
        document.querySelector('.add-task').innerHTML += `
                <li class="taskname">
                    ${document.querySelector('.container-titles input').value}
                </li>
           
        `;
    }

    document.querySelector(".container-titles input").value = "";
}

