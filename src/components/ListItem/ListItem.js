import React from 'react';
import './ListItem.css';
import phoneIcon from '../../icons/icons8-smartphone-64.png';
import emailIcon from '../../icons/icons8-email-64.png';

const ListItem = ({ employee, onClick }) => {

    const handleClick = () => {
        onClick(employee);
    };

    return (
        <div className='item' onClick={handleClick}>
            <h2>{employee.name}</h2>
            <div className="icon-container">
                <img src={phoneIcon} alt="Phone icon" className="icon" />
                <p>{employee.phone}</p>
            </div>
            <div className="icon-container">
                <img src={emailIcon} alt="Email icon" className="icon" />
                <p>{employee.email}</p>
            </div>
        </div>
    );
}

export default ListItem;