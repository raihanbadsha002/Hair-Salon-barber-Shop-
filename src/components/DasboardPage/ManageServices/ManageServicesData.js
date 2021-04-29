import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageServicesData = ({service,fetchServiceList}) => {
    const deleteItem = (id) => {
        
        fetch(`https://guarded-inlet-61648.herokuapp.com/deleteItem/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => fetchServiceList())
        
    }

    return (
      <>
        
        
    <tr>
        <td>{service.stitle}</td>
        <td>${service.price}</td>
        <td>
        <span style={{cursor: "pointer"}} className="bg-success text-white p-1"> <FontAwesomeIcon icon={faEdit}/> </span>    <span className="bg-danger text-white p-1 ml-2" style={{cursor: "pointer"}} onClick={() => deleteItem(service._id)}><FontAwesomeIcon icon={faTrashAlt}/></span>        
        </td>
    </tr>
</>
    
    );
};

export default ManageServicesData;