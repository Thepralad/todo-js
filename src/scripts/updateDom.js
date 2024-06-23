import domManupulator from "./dom";
import { Tasks } from "./taskStorage";

export default function addTaskToDom(){
    Tasks.tasks.reverse();
    for (const task of Tasks.tasks) {
        domManupulator(task);
    }
}

