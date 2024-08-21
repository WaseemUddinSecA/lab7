document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Add task to the list
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleComplete);

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteTask);

        listItem.appendChild(checkbox);
        listItem.appendChild(taskContent);
        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);
        taskInput.value = '';
    };

    // Toggle task completion
    const toggleComplete = (event) => {
        const listItem = event.target.parentElement;
        listItem.classList.toggle('completed');
    };

    // Delete task from the list
    const deleteTask = (event) => {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    };

    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
