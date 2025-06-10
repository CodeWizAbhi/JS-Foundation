const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let tasks = [];
function showMenu() {
    console.log("\n===== To Do List =====");
    console.log("1. Add Task");
    console.log("2. Show All Tasks");
    console.log("3. Mark Task as Complete");
    console.log("4. Mark Task as Incomplete");
    console.log("5. Delete Task");
    console.log("6. Exit");
    rl.question("Choose an option (1-6): ", handleMenu);
}
function handleMenu(choice) {
    try {
        switch (choice.trim()) {
            case '1':
                rl.question("Enter task name: ", (taskName) => {
                    try {
                        if (!taskName.trim()) throw "Task name cannot be empty!";
                        tasks.push({ name: taskName.trim(), complete: false });
                        console.log("Task added successfully.");
                    } catch (err) {
                        console.log("Error adding task:", err);
                    }
                    showMenu();
                });
                break;
            case '2':
                try {
                    if (tasks.length === 0) throw "No tasks available.";
                    console.log("\nYour Tasks:");
                    tasks.forEach((task, i) => {
                        console.log(`${i + 1}. ${task.name} [${task.complete ? 'Complete' : 'Incomplete'}]`);
                    });
                } catch (err) {
                    console.log("Error:", err);
                }
                showMenu();
                break;
            case '3':
                rl.question("Enter task number to mark as complete: ", (num) => {
                    try {
                        let index = parseInt(num) - 1;
                        if (isNaN(index) || index < 0 || index >= tasks.length)
                            throw "Invalid task number.";
                        tasks[index].complete = true;
                        console.log("Task marked as complete.");
                    } catch (err) {
                        console.log("Error:", err);
                    }
                    showMenu();
                });
                break;
            case '4':
                rl.question("Enter task number to mark as incomplete: ", (num) => {
                    try {
                        let index = parseInt(num) - 1;
                        if (isNaN(index) || index < 0 || index >= tasks.length)
                            throw "Invalid task number.";
                        tasks[index].complete = false;
                        console.log("Task marked as incomplete.");
                    } catch (err) {
                        console.log("Error:", err);
                    }
                    showMenu();
                });
                break;
            case '5':
                rl.question("Enter task number to delete: ", (num) => {
                    try {
                        let index = parseInt(num) - 1;
                        if (isNaN(index) || index < 0 || index >= tasks.length)
                            throw "Invalid task number.";
                        let removed = tasks.splice(index, 1);
                        console.log(`Deleted: ${removed[0].name}`);
                    } catch (err) {
                        console.log("Error:", err);
                    }
                    showMenu();
                });
                break;
            case '6':
                console.log("Exiting Task Manager. Bye!");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please select 1 to 6.");
                showMenu();
        }
    } catch (error) {
        console.log("Something went wrong:", error);
        showMenu();
    }
}
showMenu();