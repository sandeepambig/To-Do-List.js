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
var current_tasks = document.querySelectorAll(".delete");
for(let i=0; i<current_task.length; i++){
        document.querySelector(currents_task[i]).addEventListener("click",()=>{
        this.parentNode.remove();
    })
        
       
}

var tasks = document.querySelectorAll(".task");
for(let i=0; i<tasks; i++){
    tasks[i].addEventListener("click",()=>{
        this.classList.toggle(".completed");
    })
}