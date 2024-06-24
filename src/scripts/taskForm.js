import createTask from "./tasksModule";
import { addTask } from "./tasks"
import { Tasks } from "./taskStorage";


export default function taskForm(){
    const addBtn = document.getElementById('submit');
    addBtn.addEventListener('click', function(e){
        const titleV = document.getElementById('title').value;
        const dueDateV = document.getElementById('dueDate').value;
        const priorityV = document.getElementById('priority').value;
        const newTask = createTask(titleV, dueDateV, priorityV);
        addTask(newTask);
        console.log(Tasks.tasks);
        e.preventDefault();
    })
}
