import axios from "axios";
import "../App.css";
import { DetailList } from "./DetailList";
import React, { useEffect, useState } from "react";

const DetailInput = () => {
    const [name, setName] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [department, setDepartment] = React.useState("");
    const [role, setRole] = React.useState("");
    const [salary, setSalary] = React.useState("");

    const [data, setData] = useState([]);
    const [fdata, setFdata] = useState([]);
    const [sdata, setSdata] = useState([]);
    const [ddata, setDdata] = useState([]);

    useEffect(() => {
        getData();
    }, []);
    // console.log(fdata);
    const getData = () => {
        axios.get("http://localhost:3002/posts").then((res) => {
            setData(res.data);
            setFdata(res.data);
        });
    };

    const handleFilter = (text) => {
        const updatedData = data.filter((item) => text === item.department);
        setFdata(updatedData);
    };
    const lowToHigh = () => {
        const sortData = fdata.sort((a, b) => a.salary - b.salary);
        setSdata(sortData);
    };
    const highToLow = () => {
        const sortData = fdata.sort((a, b) => b.salary - a.salary);
        setDdata(sortData);
    };
    // console.log(sdata);
    return (
        <>
            <div>
                <input
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    type="text"
                    placeholder="Name"
                />
                <br />
                <input
                    onChange={(e) => {
                        setGender(e.target.value);
                    }}
                    type="text"
                    placeholder="Gender"
                />
                <br />
                <input
                    onChange={(e) => {
                        setDepartment(e.target.value);
                    }}
                    type="text"
                    placeholder="Department"
                />
                <br />
                <input
                    onChange={(e) => {
                        setRole(e.target.value);
                    }}
                    type="text"
                    placeholder="Role"
                />
                <br />
                <input
                    onChange={(e) => {
                        setSalary(e.target.value);
                    }}
                    type="number"
                    placeholder="Salary"
                />
                <br />
                <button
                    onClick={() => {
                        var data = {
                            name,
                            gender,
                            department,
                            salary,
                            role,
                        };
                        axios
                            .post("http://localhost:3002/posts", data)
                            .then(() => {
                                getData();
                            });
                    }}
                >
                    Add Employee
                </button>
            </div>
            <hr />
            <button
                onClick={() => {
                    getData();
                }}
            >
                Show All Departments
            </button>
            <button onClick={() => handleFilter("Marketing")}>
                Show Marketing
            </button>

            <button onClick={() => handleFilter("HR")}>Show HR</button>
            <button onClick={() => handleFilter("IT")}>Show IT</button>
            <button onClick={() => handleFilter("Finance")}>
                Show Finance
            </button>
            <br />
            <button onClick={lowToHigh}>Sort By Salary Ascending</button>
            <button onClick={highToLow}>Sort By Salary Descending</button>
            <hr />

            <div className="display">
                {fdata.map((e) => (
                    <DetailList {...e} key={e.id} />
                ))}
            </div>
        </>
    );
};

export { DetailInput };
