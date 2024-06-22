const Tasks = (function(){
    let tasks = new Array();
    
    return{
        addTaskToStorage: function(value){
            tasks.push(value);
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
