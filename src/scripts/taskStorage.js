const Tasks = (function(){
    let tasks = new Array();
    
    return{
        addTaskToStorage: function(value){
            tasks.push(value);
            window.localStorage.setItem(`${value.title}`, JSON.stringify(value));
    
        },
        removeTaskFromStorage: function(value){
            window.localStorage.removeItem(`${value.title}`);
        },
        showTasks: function(){
            for (const task of tasks) {
                console.log(task.title);
            }
        }
    }
})();

export{
    Tasks
}
