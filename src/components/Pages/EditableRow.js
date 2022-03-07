import React from "react";

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name...."
          name="KRA"
          value={editFormData.KRA}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <input
          type="text"
          required="required"
          placeholder="Enter a Goal...."
          name="Goal"
          value={editFormData.Goal}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <input
          type="text"
          required="required"
          placeholder="Enter a phone number...."
          name="Weighage"
          value={editFormData.Weighage}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <input
          type="Company_Goal"
          required="required"
          placeholder="Enter a Company_Goal...."
          name="Company_Goal"
          value={editFormData.Company_Goal}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
