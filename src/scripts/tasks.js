import { validate } from "webpack";
import { Tasks } from "./taskStorage";


function addTask(value){
    if(validate(value)){
        console.log('It cannot be empty');
    }
    else{
        Tasks.addTaskToStorage(value);
    }
    
}
function removeTask(value){
    Tasks.removeTaskFromStorage(value);
}
export{
    addTask,removeTask,
}
