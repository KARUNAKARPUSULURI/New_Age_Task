import React from 'react'

const TableEdit = ({mockj,handleEditClick}) => {
    return (
        
            <tr>
                   <td>
                      <input type="checkbox" name='check-tab1' />
                    </td>
                <td>
                    {mockj.taskName}
                </td>
                <td>
                    {mockj.createdDate}
                </td>
                <td>
                    {mockj.dueDate}
                </td>
                {/* <td>
                      20-11-2022
                    </td> */}
                <td>
                    {mockj.selectAssignee}
                </td>
                <td>
                    {mockj.selectCategory}
                </td>
                <td>
                    {mockj.selectStatus}
                </td>
                <td>
                    {mockj.jiraId}
                </td>
                <td>
                    {mockj.mockUp}
                </td>
                <td>
                    {mockj.otherComments}
                </td>
                <td>
                    <button
                    type="button"
                    onClick={(event)=>{
                        handleEditClick(event, mockj)
                    }}
                    >
                       Edit
                    </button>
                    <button
                    type="button"
                    // onClick={(event)=>{
                    //     handleEditClick(event, mockj)
                    // }}
                    >
                       Done
                    </button>

                    
                </td>
            </tr>
        
    )
}

export default TableEdit
