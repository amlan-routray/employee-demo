import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

export default function TableRow(emp) {

    const [isReadOny,setIsReadOnly] = useState(true);
    const [buttonText,setButtonText] = useState('Edit');
    const nameRef = useRef();
    const emailRef = useRef();
    const usernameRef = useRef();
    
    const editHandler = () => {
      console.log('Edit Handler')
        buttonText==='Edit'?setButtonText('Save'):setButtonText('Edit');
        setIsReadOnly(prev => !prev)
        emp.handleEdit({
            id:emp.id,
            name:nameRef.current.value,
            email:emailRef.current.value,
            username:usernameRef.current.value
        })
    }

    return (
        <tr key={emp.id}>
            <td><input ref={nameRef} defaultValue={emp.name} readOnly={isReadOny}/></td>
            <td><input ref={emailRef} defaultValue={emp.email} readOnly={isReadOny}/></td>
            <td><input ref={usernameRef} defaultValue={emp.username} readOnly={isReadOny}/></td>
            <td>
              <Link to={`/empdetails/${emp.id}`}>
                View more
              </Link>
            </td>
            <td>
              <button onClick={editHandler}>
                {buttonText}
              </button>
            </td>
            <td>
              <button onClick={() => emp.removeEmployee(emp.id)}>
                Remove
              </button>
            </td>
          </tr>
    )
}
