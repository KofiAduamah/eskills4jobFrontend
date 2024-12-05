import React, {useState} from 'react';



const Department = () => {
    
    return (
        <div className='departmentcontent'>
            <div className='header-department'>
            <h2>Department</h2>
            <p>Department In School</p>
            </div>
            <button className='departbutton'>Create Department</button>
            <div className='departmentmain'>
            <div className='departmentheader'>
            <p>DepartmentID</p>
            <p>Department Name</p>
             <p className='action'>Action</p>    
             </div>
             <DepartmentModule departmentid= '1' departmentname = 'Computer Science'/>
             <DepartmentModule departmentid= '2' departmentname = 'Engineering'/>


            </div>
        </div>
        
    )
    
};
    
    export default Department;