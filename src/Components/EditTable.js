import React from 'react'

const EditTable = ({editDataForm,handleEditFormChange,cancelClick}) => {
  return (
      <tr>
        <td>
        <input
          type="text"
          placeholder='Task Name'
          value={editDataForm.taskName}
          name="taskName"
          onChange={handleEditFormChange}
          required="required"
        />
        </td>
        <td>
        <select
          name="selectCategory"
          value={editDataForm.selectCategory}
          onChange={handleEditFormChange}
          required="required"
        >
          <option>
            Select Category
          </option>
          <option>
            NPG bug task
          </option>
          <option>
            NAP Dev
          </option>
          <option>
            New Project
          </option>
        </select>
        </td>
        <td>
        <input
          type="Jira ID"
          placeholder='Jira ID'
          name='jiraId'
          value={editDataForm.jiraId}
        onChange={handleEditFormChange}
          required="required"
        />
        </td>
        
        <td>
        <select
          name='selectAssignee'
          value={editDataForm.selectAssignee}
        onChange={handleEditFormChange}
          required="required"
        >
          <option>
            select assignee
          </option>
          <option>
            Bibhu
          </option>
          <option>
            Tanzil
          </option>
        </select>
        </td>
       
       <td>
        <select
          name='selectStatus'
          value={editDataForm.selectStatus}
        onChange={handleEditFormChange}
          required="required"
        >
          <option>
            select Status
          </option>
          <option>
            in QC
          </option>
          <option>
            In Deployment
          </option>
          <option>
            On Hold
          </option>
        </select>
        </td>

        <td>
        <input
          type="date"
          name='createdDate'
          value={editDataForm.createdDate}
        onChange={handleEditFormChange}
          required="required"
        />
        </td>
        
        <td> 
        <input
          type="date"
          name='dueDate'
          value={editDataForm.dueDate}
        onChange={handleEditFormChange}
          required="required"
        />
        </td>  
         
        <td>
        <input
          type="text"
          placeholder='Mock Up'
          name='mockUp'
         value={editDataForm.mockUp}
        onChange={handleEditFormChange}
          required="required"
        />
        </td>
        
        <td>
        <textarea
          name='otherComments'
          value={editDataForm.otherComments}
        onChange={handleEditFormChange}
          required="required"
        >
          Other Comments
        </textarea>
        </td>
        <td>
            <button
            type='submit'
            >
            save
            </button>
            <button
            type='button'
            onClick={cancelClick}
            >
            cancel
            </button>
        </td>
        </tr>
  )
}

export default EditTable
