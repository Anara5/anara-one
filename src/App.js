import React, { useState, useContext } from 'react';
import './App.css';
import ListItem from './components/ListItem/ListItem';
import Modal from './components/Modal/Modal';
import { EmployeesContext } from './context/employees';
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails';
import searchicon from './icons/icons8-search-64.png';

function App() {
  const { employees } = useContext(EmployeesContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  if (!employees.length) {
    return <h3>No Employees Available</h3>
  }

  const handleOpenModal = (employee) => {
      setSelectedItem(employee);
    };

  const handleCloseModal = () => {
      setSelectedItem(null);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Test One</h1>
      </header>

      <main>
        <div className='input-container'>
          <input 
            className='search-bar'
            type='text' 
            value={searchValue}
            onChange={handleInputChange}
          >
          </input>
          <img src={searchicon} alt='search icon' className='search-icon' />
        </div>
      
        <div className='all-items-list'>
          {filteredEmployees.map((employee, key) => (
            <ListItem 
              employee={employee}
              key={key}
              onClick={() => handleOpenModal(employee)}
            />
          ))
          }
        </div>
      </main>

      {selectedItem && 
        <Modal onClose={handleCloseModal}>
          <EmployeeDetails employeeSelected={selectedItem} />
        </Modal>}
      
    </div>
  );
}

export default App;
