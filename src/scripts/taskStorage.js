const Tasks = (function(){
    let tasks = [];
    
    return{
        addTaskToStorage: function(value){
            tasks.push(value);
            window.localStorage.setItem(`${value.title}`, JSON.stringify(value));
    
        },
        removeTaskFromStorage: function(value){
            window.localStorage.removeItem(`${value.title}`);
            const index = tasks.indexOf(value);
            console.log(index);
            if(index !== -1){
                tasks.splice(index, 1);
            }
            
        },
       tasks,
    }
})();

export{
    Tasks
}
