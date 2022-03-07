import React,{useState, Fragment} from 'react'
import './Goals.css'
import {MdAdd} from "react-icons/md";
import {nanoid} from 'nanoid';



import data from './mock-data.json';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';


const Goals = () => {
 
  const [addGoal, setGoal]= useState(data);
  const [addFormData, setAddFormData] = useState({
    KRA:"",
    Goal:"",
    Weighage:"",
    Company_Goal:"",
  })

  const [editFormData, setEditFormData] = useState({
    KRA:"",
    Goal:"",
    Weighage:"",
    Company_Goal:"",
  })


  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);

  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleAddFormSubmit =(event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid (),
      KRA: addFormData.KRA,
      Goal: addFormData.Goal,
      Weighage: addFormData.Weighage,
      Company_Goal: addFormData.Company_Goal,
    };

    const newContacts = [...addGoal, newContact];
    setGoal(newContacts);

  } 

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      KRA : editFormData.KRA,
      Goal: editFormData.Goal,
      Weighage: editFormData.Weighage,
      Company_Goal: editFormData.Company_Goal,
    }

    const newContacts = [...addGoal];

    const index = addGoal.findIndex((addGoals)=>addGoals.id === editContactId);

    newContacts[index] = editedContact ;

    setGoal(newContacts);
    setEditContactId(null)

  }

  const handleEditClick = (event, addGoals) => {
    event.preventDefault();
    setEditContactId(addGoals.id);

   const formValues = {
     KRA : addGoals.KRA,
     Goal : addGoals.Goal,
    Weighage: addGoals.Weighage,
     Company_Goal: addGoals.Company_Goal,
   } 

   setEditFormData(formValues);

  }

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
      const newContacts = [...addGoal];

      const index = addGoal.findIndex ((addGoals)=>addGoals.id === contactId);

      newContacts.splice(index, 1);

      setGoal(newContacts);
  }
  
  return (
    <div className='goals'>

      <div className='d-flex justify-content-between mt-1'>
      
      <div className='d-flex align-items-center' >

  <div className='MuiChip-root'>

    <span className='surge_cycle'>Surge cycle : Feb 23, 2022 to Mar 1, 2022</span>

  </div>

      </div>
      <div className='btn_goal'>

    <button type="button" className="btn  commit_goals ">Commit goals</button>

      </div>

<div className='btnB'>

</div>
<form onSubmit={handleEditFormSubmit}>

<div className='Table mt-3 datatable-responsive'>

<table className='table' >
  
  <thead role='columnheader' className='p-sortable-disabled' >
    <tr >
      <th className= 'Thead ' style={{ padding: '1rem 4.5rem'}} scope="col">Goal</th>
      <th className= 'Thead' style={{ padding: '1rem 4.5rem'}} scope="col">Weighage</th>
      <th className= 'Thead' style={{ padding: '1rem 4.5rem'}} scope="col">Status</th>
      <th className= 'Thead' style={{ padding: '1rem 4.5rem'}} scope="col">Notes</th>
      <th className= 'Thead' style={{ padding: '1rem 4.5rem'}} scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {addGoal.map((addGoals)=>(
      <Fragment>
        {editContactId === addGoals.id ? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick = {handleCancelClick}/> ) :( <ReadOnlyRow addGoals={addGoals} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>
        )}
      
    
    </Fragment>

    ))}
    
    
  </tbody>
</table>

</div>
</form>

  
      </div>
      <div>

<button type="button" className="btn  addG" data-bs-toggle="modal" data-bs-target="#exampleModal" >
<MdAdd/> Add Goals
</button>

<form onSubmit={handleAddFormSubmit}>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel" >Add Goal</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body">

      {/* modal-body */}
     
              <div className="p-field">
    <label className="mt-2 d-block">KRA</label>
      <div className="input-group mb-3">
  <select className="form-select" id="inputGroupSelect01" name='fullName'  aria-label="KRA" onChange={handleAddFormChange}>
    <option value="1">Select KRA</option>
    <option value="2">None</option>
    
  </select>
</div>
</div>

<div className="p-field">
    <label className="mt-2 d-block">Goal</label>
      
    <div className="input-group flex-nowrap">
  <input type="text" className="form-control"  name="Goal" aria-describedby="addon-wrapping" onChange={handleAddFormChange}/>
</div>
</div>

<div className="p-field">
    <label className="mt-2 d-block">Weighage (%)</label>
      
    <div className="input-group flex-nowrap">
  <input type="number" className="form-control"  name="Weighage" aria-describedby="addon-wrapping" onChange={handleAddFormChange}/>
</div>
</div>

<div className="p-field">
    <label className="mt-2 d-block" >Company Goal</label>
      
    <select className="form-select" id="inputGroupSelect01" placeholder='Select Company Goal' name="Company_Goal" onChange={handleAddFormChange}>
    <option value="1">None</option>
    <option value="2">Signup 10 paid clients</option>
    <option value="3">Deliver flawless end to end product experience</option>
    <option value="4">Incorporate customer feedback in product development</option>
    
  </select>
</div>



      </div>
      

      <div className="modal-footer">
        
        <button type="submit" className="btn btn-primary addbtn" 
        
        >Add</button>
      </div>
    </div>
    
  </div>
  
</div>

</form>
    </div>
    </div>
  )
}

export default Goals