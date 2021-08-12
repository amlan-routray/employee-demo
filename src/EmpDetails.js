import React from "react";
import { useParams } from "react-router-dom";

const EmpDetails = (props) => {
  const { id } = useParams();
  const employee = props.list.filter((obj) => obj.id === parseInt(id))[0];

  return (
    <div>
      <h2>Employee Details-{id}</h2>
      {
        <div>
          <p>{employee.name}</p>
          <p>{employee.email}</p>
        </div>
      }
    </div>
  );
};

export default EmpDetails;
