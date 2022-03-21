import React from "react";
import "../App.css";

const DetailList = ({ name, role, salary, department, gender, id }) => {
    return (
        <div className="card">
            <div> Name :- {name}</div>
            <div>Gender :- {gender}</div>
            <div>Role :- {role}</div>
            <div>Department :- {department}</div>
            <div>Salary :- {salary}</div>
            {/* <div></div> */}
        </div>
    );
};

export { DetailList };
