
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var taskText = taskInput.value;

    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    var li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

// Remove a task from the list
function removeTask(button) {
    var taskList = document.getElementById('taskList');
    taskList.removeChild(button.parentElement);
    
}
