import React from "react";
import "../styles.css";

const TaskCard = ({ id, title, type, imgSrc, imgAlt }) => {
    return (
        <div className="task-card">
            <div className="task-header">
                <span>{id}</span>
                <img src={imgSrc} alt={imgAlt} className="user-avatar" />
            </div>
            <p className="task-title">{title}</p>
            <div className="task-footer">
                <i className="fas fa-ellipsis-h"></i>
                <span>{type}</span>
            </div>
        </div>
    );
};

export default TaskCard;
