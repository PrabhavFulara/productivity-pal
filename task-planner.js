document.getElementById("addTaskButton").addEventListener("click", function() {
  const taskInput = document.getElementById("taskInput").value;
  if (taskInput) {
      const taskList = document.getElementById("taskList");
      const newTaskItem = document.createElement("li");
      newTaskItem.textContent = taskInput;
      
      // Create delete button for the task
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.addEventListener("click", function() {
          taskList.removeChild(newTaskItem);
      });
      
      newTaskItem.appendChild(deleteButton);
      taskList.appendChild(newTaskItem);
      
      document.getElementById("taskInput").value = ""; // Clear input
  }
});
