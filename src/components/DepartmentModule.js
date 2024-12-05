import React from "react";


const DepartmentModule=({departmentid, departmentname}) =>{
    return (
        <div className="departmentinfo">
            <p>{departmentid}</p>
            <p>{departmentname}</p>
            <div>
                <button className="edit">edit</button>
                <button className="view">view</button>
                <button className="delete">delete</button>
            </div>
        </div>
    );
};
export default DepartmentModule;