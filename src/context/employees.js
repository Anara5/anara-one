import React, { useState, useEffect, createContext } from 'react';
const EmployeesContext = createContext();

const EmployeesProvider = ({ children }) => {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);

    // const fetchEmployees = async () => {
    //     setLoading(true);
    //     try {
    //       const response = await fetch('http://[::1]:3000');
    //       const blob = await response.json();
    //         setEmployees(blob);
    //         setLoading(false);
    //     } catch (error) {
    //         console.error('Error fetching employees', error);
    //         setLoading(false);
    //     }
    // }

    const fetchEmployees = async (searchTerm) => {
        setLoading(true);
        try {
          let url = 'http://[::1]:3000';
          if (searchTerm) {
            const params = new URLSearchParams({ term: searchTerm });
            url += `?${params}`;
          }
      
          const response = await fetch(url);
          const blob = await response.json();
          setEmployees(blob);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching employees', error);
          setLoading(false);
        }
      };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <EmployeesContext.Provider value={{ employees, loading }} >
            {children}
        </EmployeesContext.Provider>
    );
}

export { EmployeesContext, EmployeesProvider };