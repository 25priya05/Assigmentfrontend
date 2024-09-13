import React from "react";

const Task = ({ task }) => {
    return (
        <div className="task-card">
            <div className="task-header">
                <span className="task-id">{task.id}</span>
                <img
                    src={task.avatar}
                    alt={task.assignedTo}
                    className="avatar"
                />
            </div>
            <p className="task-title">{task.title}</p>
            <span className="task-type">{task.type}</span>
            <p className="task-priority">Priority: {task.priority}</p>
            <p className="task-user">
                Assigned to: {task.assignedTo || "Unassigned"}
            </p>
        </div>
    );
};

export default Task;
