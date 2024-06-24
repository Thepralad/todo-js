function domManupulator(value){
    const title = document.createElement('h3');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');
    const task = document.createElement('div');

    title.textContent = value.title;
    dueDate.textContent = value.dueDate;
    priority.textContent = value.priority;

    task.appendChild(title);
    task.appendChild(dueDate);
    task.appendChild(priority);
    
    document.body.appendChild(task);
}

export {
    domManupulator
}
