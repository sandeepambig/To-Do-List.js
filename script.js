document.querySelector("#push").addEventListener("click",()=>{

    if(document.querySelector('.newtask input').value.length==0){
        alert("Please enter a task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
        <div class="task">
        <span id="taskname">${document.querySelector('.newtask Input').value}
        </span>
        <button class="delete"><i class="fa-sharp fa-solid fa-trash"></i></button>
        </div>
        `
    }
})