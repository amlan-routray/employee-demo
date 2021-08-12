import "./App.css";
import {
  BrowserRouter,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import EmpAdd from "./EmpAdd/EmpAdd";
import EmpList from "./EmpList/EmpList";
import { useEffect, useState } from "react";
import axios from "axios";
import EmpDetails from "./EmpDetails";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.data.map(employee => 
        setEmployees((prev) => 
          [...prev,
          {
            id: employee.id,
            name: employee.name,
            username: employee.username,
            email: employee.email,
          }])
        );
      });
    }, 
  []);

  //console.log(employees);
  const addEmployee = (employee) => {
    setEmployees((prev) => [...prev, employee]);
  };

  const removeEmployee = (id) => {
    const newEmployeeList = employees.filter(employee => employee.id !== id);
    setEmployees(newEmployeeList);
  };

  const handleEdit = employee => {
    const newEmployeeList = employees.map(emp => emp.id === employee.id ? employee : emp);
    setEmployees(newEmployeeList);
  }

  return (
    <BrowserRouter className="App">
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "45px",
          justifyContent: "space-between",
          backgroundColor: "rgb(120, 85, 145)",
        }}
      >
        <header className="myheader">Assignment App</header>
        <div style={{ display: "flex" }}>
          <NavLink
            to="/emplist"
            style={{
              textDecoration: "none",
              marginRight: "24px",
              color: "white",
              fontSize: "larger",
              
            }}
          >
            Employee List
          </NavLink>
          <NavLink
            to="/empadd"
            style={{
              textDecoration: "none",
              marginRight: "24px",
              color: "white",
              fontSize: "larger",
              
            }}
          >
            Add Employee
          </NavLink>
        </div>
      </div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/emplist" />
        </Route>
        <Route path="/emplist">
          <EmpList
            list={employees}
            removeEmployee={(id) => removeEmployee(id)}
            handleEdit={employee => handleEdit(employee)}
          />
        </Route>
        <Route path="/empadd">
          <EmpAdd addEmployee={(employee) => addEmployee(employee)} />
        </Route>
        <Route path="/empdetails/:id">
          <EmpDetails list={employees}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
