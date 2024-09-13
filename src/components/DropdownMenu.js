import React from "react";
import "../styles.css";

const DropdownMenu = ({ isOpen, toggleDropdown }) => {
    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                <i className="fas fa-bars"></i>
                <span>Display</span>
                <i className="fas fa-chevron-down"></i>
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdown-option">
                        <span>Grouping</span>
                        <select>
                            <option>Status</option>
                            <option>User</option>
                            <option>Priority</option>
                        </select>
                    </div>
                    <div className="dropdown-option">
                        <span>Ordering</span>
                        <select>
                            <option>Priority</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;
