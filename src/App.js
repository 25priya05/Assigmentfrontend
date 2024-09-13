import React, { useState, useEffect } from "react";
import TaskColumn from "./components/TaskColumn";
import DropdownMenu from "./components/DropdownMenu"; // Corrected line
import "./styles.css";

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [groupedTasks, setGroupedTasks] = useState({});

    // Group tasks by a given key (e.g., status, user)
    const groupTasksBy = (key, tasks) => {
        const grouped = tasks.reduce((acc, task) => {
            const groupKey = task[key];
            if (!acc[groupKey]) {
                acc[groupKey] = [];
            }
            acc[groupKey].push(task);
            return acc;
        }, {});
        setGroupedTasks(grouped);
    };

    // Fetch tasks from the API
    useEffect(() => {
        fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
            .then((response) => response.json())
            .then((data) => {
                setTasks(data.tickets); // Save the tickets data in state
                groupTasksBy("status", data.tickets); // Initially group by status
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="app-container">
            <div className="dropdown-wrapper">
                <DropdownMenu
                    isOpen={isDropdownOpen}
                    toggleDropdown={toggleDropdown}
                />
            </div>
            <div className="task-board">
                {/* Render each column dynamically based on grouped tasks */}
                {Object.keys(groupedTasks).map((groupKey) => (
                    <TaskColumn
                        key={groupKey}
                        title={groupKey}
                        items={groupedTasks[groupKey]}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
