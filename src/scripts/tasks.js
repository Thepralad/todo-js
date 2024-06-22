import { Tasks } from "./taskStorage";

function addTask(value){
    Tasks.addTaskToStorage(value);
}
function showTask(){
    Tasks.showTasks()
}

export{
    addTask, showTask
}
