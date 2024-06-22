import createTask from "./tasksModule";
import {addTask} from "./tasks"
import { showTask } from "./tasks";


const task1 = createTask(123);
addTask(task1);
showTask();
