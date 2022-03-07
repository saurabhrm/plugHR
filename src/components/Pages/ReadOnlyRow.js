import React from 'react'

const ReadOnlyRow = ({addGoals, handleEditClick, handleDeleteClick}) => {
  return (
    
        <tr>
      <th scope="row">Dashboard</th>
      <td>{addGoals.KRA}</td>
      <td>{addGoals.Goal}</td>
      <td>{addGoals.Weighage}</td>
      <td>{addGoals.Company_Goal}</td>
      <td>
        <button type='button' onClick={(event) => handleEditClick(event, addGoals)}>Edit</button>
        <button type='button' onClick={() => handleDeleteClick(addGoals.id)} >Delete</button>
      </td>
    </tr>
    
  )
}

export default ReadOnlyRow