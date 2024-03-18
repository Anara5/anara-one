import React, { useState, useEffect, useContext } from 'react';
import './Home.css';
import ListItem from '../components/ListItem/ListItem';
import Modal from '../components/Modal/Modal';
import { EmployeesContext } from '../context/employees';
import EmployeeDetails from '../components/EmployeeDetails/EmployeeDetails';
import searchicon from '../icons/icons8-search-64.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { employees } = useContext(EmployeesContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get('term') || '';
    setSearchValue(searchTerm);
  }, []);

  const handleOpenModal = (employee) => {
    setSelectedItem(employee);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);

    // Update URL with the search term as a query parameter
    const url = value ? `?term=${encodeURIComponent(value)}` : '/';
    navigate(url);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (!employees.length) {
    return <h3>No Employees Available</h3>;
  }

  return (
    <>
      <div className='input-container'>
        <input
          className='search-bar'
          type='text'
          value={searchValue}
          onChange={handleInputChange}
        />
        <img src={searchicon} alt='search icon' className='search-icon' />
      </div>

      <div className='all-items-list'>
        {filteredEmployees.map((employee, key) => (
          <ListItem
            employee={employee}
            key={key}
            onClick={() => handleOpenModal(employee)}
          />
        ))}
      </div>

      {selectedItem && (
        <Modal onClose={handleCloseModal}>
          <EmployeeDetails employeeSelected={selectedItem} />
        </Modal>
      )}
    </>
  );
};

export default Home;
