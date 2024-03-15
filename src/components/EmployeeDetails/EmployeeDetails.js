import React, { useContext } from "react";
import { EmployeesContext } from "../../context/employees";
import './EmployeeDetails.css';

const EmployeeDetails = ({ employeeSelected }) => {
    const { employees } = useContext(EmployeesContext);

    const employee = employees.find((clicked) => clicked === employeeSelected);

    if (!employee) {
        return <h3>Loading...</h3>;
    }

    const { name, phone, email, hire_date, position_name, department, address } = employee;

    return (
        <div className="employee-details">
            <div className="detail-description">
                <h2>{name}</h2>

                <div className="table-row">
                    <div className="table-header">
                        <p>Телефон:</p>
                    </div>
                    <div className="table-body">
                        <p>{phone}</p>
                    </div>
                </div>
                <div className="table-row">
                    <div className="table-header">
                        <p>Почта:</p>
                    </div>
                    <div className="table-body">
                        <p>{email}</p>
                    </div>
                </div>
                <div className="table-row">
                    <div className="table-header">
                        <p>Дата приема:</p>
                    </div>
                    <div className="table-body">
                        <p>{hire_date}</p>
                    </div>
                </div>
                <div className="table-row">
                    <div className="table-header">
                        <p>Должность:</p>
                    </div>
                    <div className="table-body">
                        <p>{position_name}</p>
                    </div>
                </div>
                <div className="table-row">
                    <div className="table-header">
                        <p>Подразделение:</p>
                    </div>
                    <div className="table-body">
                        <p>{department}</p>
                    </div>
                </div>
                
                <div className="description">
                    <p className="desc-title">Дополнительная информация:</p>
                    <p className="desc-text">{address}</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeDetails;
