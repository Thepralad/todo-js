import { Tasks } from "./taskStorage";


function addTask(value){
    Tasks.addTaskToStorage(value);
}
function removeTask(value){
    Tasks.removeTaskFromStorage(value);
}
export{
    addTask,removeTask,
}
