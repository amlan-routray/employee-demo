import React, { useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import TableRow from "../TableRow";

export default function EmpList(props) {
  const location = useLocation();
  const searchRef = useRef();
  const history = useHistory();
  const searchQuery = new URLSearchParams(location.search);
  console.log(props)

  const data = searchQuery.get("query")
    ? props.list.filter((emp) =>
        emp.name.toLowerCase().includes(searchQuery.get("query"))
      )
    : props.list;

  const searchHandler = () => {
    if (searchRef.current.value.trim() !== "")
      history.replace(
        `/emplist/?query=${searchRef.current.value.toLowerCase()}`
      );
    else history.replace("/emplist");
  };


  return (
    <div>
      <div style={{textAlign:'center',marginTop:'24px'}}>
        <input
          className='search-box'
          ref={searchRef}
          type="text"
          placeholder="Type name to search "
        />
        <button onClick={searchHandler}>Search</button>
      </div>
      <table style={{ margin: "30px 0px 0px 550px" }}>
        <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>More Info</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
        </thead>
        <tbody>
        {data.map((emp) => (
          <TableRow key={emp.id}
            name={emp.name}
            email={emp.email}
            username={emp.username}
            removeEmployee={props.removeEmployee}
            id={emp.id}
            handleEdit={props.handleEdit}
          />          
        ))}
        </tbody>
      </table>
    </div>
  );
}
