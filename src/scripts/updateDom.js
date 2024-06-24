import { Tasks } from "./taskStorage";
import { domManupulator } from "./dom";

export default function addTaskToDom(){
    Tasks.tasks.reverse();
    for (const task of Tasks.tasks) {
        domManupulator(task);
    }
}

