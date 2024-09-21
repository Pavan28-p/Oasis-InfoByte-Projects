document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.textContent = taskText;
            
            // Mark task as completed
            li.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            // Remove task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove');
            removeButton.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent triggering the completed toggle
                taskList.removeChild(li);
            });

            li.appendChild(removeButton);
            taskList.appendChild(li);
            taskInput.value = ''; // Clear input
        }
    });

    // Allow pressing Enter to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
