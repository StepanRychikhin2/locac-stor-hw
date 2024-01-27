    const taskForm = document.getElementById('taskForm');
    const newTaskInput = document.getElementById('newTask');
    const tasksContainer = document.getElementById('tasks');
console.log(taskForm);


   
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function savetus() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
        tasksContainer.innerHTML = '';

        tasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = task.completed;
            checkbox.addEventListener('change', () => {
                tasks[index].completed = checkbox.checked;
                savetus();
                renderTasks();
            });

            const label = document.createElement('label');
            label.textContent = task.text;
            if (task.completed) {
                label.classList.add('completed');
            }

            

            taskElement.appendChild(checkbox);
            taskElement.appendChild(label);

            tasksContainer.appendChild(taskElement);
        });
    }

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const newTaskText = newTaskInput.value.trim();
        if (newTaskText === '') return;

        tasks.push({ text: newTaskText, completed: false });
        savetus();
        newTaskInput.value = '';
        renderTasks();
    });

    renderTasks();
