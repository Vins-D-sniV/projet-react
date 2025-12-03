function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <li className="task-item">
      <span
        className={task.done ? "done" : ""}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>
        ✕
      </button>
    </li>
  );
}

export default TaskItem;
