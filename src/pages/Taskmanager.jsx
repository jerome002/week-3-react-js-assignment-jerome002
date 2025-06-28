import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Button from "../components/Button";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [taskText, setTaskText] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!taskText.trim()) return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const toggleTask = (id) =>
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const filteredTasks = tasks.filter(t =>
    filter === "completed" ? t.completed
    : filter === "active" ? !t.completed
    : true
  );

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Task Manager</h1>

      <div className="flex gap-2">
        <input
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Enter a task"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="space-x-2">
        <Button variant="secondary" onClick={() => setFilter("all")}>All</Button>
        <Button variant="secondary" onClick={() => setFilter("active")}>Active</Button>
        <Button variant="secondary" onClick={() => setFilter("completed")}>Completed</Button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map(task => (
          <li key={task.id} className="flex justify-between items-center border p-2 rounded">
            <span
              onClick={() => toggleTask(task.id)}
              className={task.completed ? "line-through cursor-pointer" : "cursor-pointer"}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
