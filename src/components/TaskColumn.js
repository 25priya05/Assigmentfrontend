import React from "react";
import TaskCard from "./TaskCard";
import "../styles.css"; 


const TaskColumn = ({ title, items }) => {
    return (
        <div className="task-column">
            <div className="task-column-header">
                <h3>{title}</h3>
                <span className="task-count">{items.length}</span>
                <i className="fas fa-plus"></i>
            </div>
            <div className="task-list">
                {items.map((item) => (
                    <TaskCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default TaskColumn;
