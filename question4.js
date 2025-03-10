// Todo CRUD Management


let tasks = [];
// This is the variable that will hold the tasks
let id = 1;

// This function adds a task with the given name and description
function addTask(name, description) {
    tasks.push({ id: id++, name, description });
}

// This function returns all tasks
function getTasks() {
    return tasks;
}

// This function updates a task with the given taskId
function updateTask(taskId, newName, newDescription) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.name = newName;
        task.description = newDescription;
    }
}

// This function deletes a task with the given taskId
function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
}

// Usage of the functions (Only an example)
addTask("Task 1", "Description 1");
console.log(getTasks());
updateTask(1, "Updated Task 1", "Updated Description");
deleteTask(1);
console.log(getTasks());
