import { Tasks } from "./taskStorage";

function addTask(value){
    Tasks.addTaskToStorage(value);
}
function showTask(){
    Tasks.showTasks()
}
function removeTask(value){
    Tasks.removeTaskFromStorage(value);
}
export{
    addTask, showTask, removeTask
}
