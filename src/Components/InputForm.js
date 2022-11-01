import React, { useEffect, useState } from 'react'
import { nanoid } from "nanoid";
import mockJson from "./data.json";
import EditTable from './EditTable';
import TableEdit from './TableEdit';
import TaskCompleted from './TaskCompleted';


// getting values from localStorage

function getFormValues() {
    const storedValues = localStorage.getItem('form');
    if (!storedValues) return {
        taskName: "",
        selectCategory: "",
        jiraId: "",
        selectAssignee: "",
        selectStatus: "",
        createdDate: "",
        dueDate: "",
        mockUp: "",
        otherComments: ""
    }
    return JSON.parse(storedValues);
};

// function for code 
const InputForm = () => {

    // created state for holding mock JSON data
    const [mockData, setMockData] = useState(mockJson);
    console.log(mockData,"mockdata")

    // craeted state for storing the form values 
    const [formData, setFormData] = useState(getFormValues);
    const { taskName, selectCategory, jiraId, selectAssignee, selectStatus, createdDate, dueDate, mockUp, otherComments } = formData;
    // const {getFormValues} = formData;

    // created event for form setState 
    const formHandler = (e) => {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: [e.target.value] })
    };

    // created event for submitting values of form
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        const newFormData = {
            id: nanoid(),
            taskName: formData.taskName,
            selectCategory: formData.selectCategory,
            jiraId: formData.jiraId,
            selectAssignee: formData.selectAssignee,
            selectStatus: formData.selectStatus,
            createdDate: formData.createdDate,
            dueDate: formData.dueDate,
            mockUp: formData.mockUp,
            otherComments: formData.otherComments,
            // isTaskDone:false
        };
        //  storing values coming from mockdata(json) and newly created object (newformdata)
        const newMockData = [...mockData, newFormData];

        // updaing vakues of newmoCKDATA USING SETmOKCDATA
        setMockData(newMockData);
    };

    // created a state for edit button
    const [edit, setEdit] = useState(null);

    const [editDataForm, setEditDataForm] = useState({
        taskName: "",
        selectCategory: "",
        jiraId: "",
        selectAssignee: "",
        selectStatus: "",
        createdDate: "",
        dueDate: "",
        mockUp: "",
        otherComments: ""
    });

    // creating event for infield row edit button
    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newdata = { ...editDataForm };
        newdata[fieldName] = fieldValue;
        setEditDataForm(newdata)
    };

    // created event for editing data form in row
    const handleEditClick = (event, mockj) => {
        event.preventDefault();
        setEdit(mockj.jiraId);

        const formValues = {
            taskName: mockj.taskName,
            selectCategory: mockj.selectCategory,
            jiraId: mockj.jiraId,
            selectAssignee: mockj.selectAssignee,
            selectStatus: mockj.selectStatus,
            createdDate: mockj.createdDate,
            dueDate: mockj.dueDate,
            mockUp: mockj.mockUp,
            otherComments: mockj.otherComments
        };
        setEditDataForm(formValues);
    }

    // creating button for save button after editing
    const handleEditSaveSubmit = (event) => {
        event.preventDefault();

        const saveData = {
            id: edit,
            taskName: editDataForm.taskName,
            selectCategory: editDataForm.selectCategory,
            jiraId: editDataForm.jiraId,
            selectAssignee: editDataForm.selectAssignee,
            selectStatus: editDataForm.selectStatus,
            createdDate: editDataForm.createdDate,
            dueDate: editDataForm.dueDate,
            mockUp: editDataForm.mockUp,
            otherComments: editDataForm.otherComments,
            
        }
        const newSaved = [...mockData];

        const index = mockData.findIndex((mockj) => mockj.jiraId === edit);
        newSaved[index] = saveData;
        setMockData(newSaved);
        setEdit(null)
    }

    // function for cancel button
    const cancelClick = () => {
        setEdit(null)
    };
      
    // const[done,setDone] = useState(); 

    // const handleDoneButton = (e)=>{
    //     // console.log("getvalues")
    //     // setMockData(...mockData, isTaskDone : true)
    //     const doneData = [...mockData];
    //     const index = mockData.findIndex((mockj).jiraId ===done);
    //     doneData[index] = saveData;
    //     setMockData(doneData);
    //     setDone(...mockData, isTaskDone : true);
    // }

    // function tab1_to_tab2(){
    //     var table1 = document.getElementById("table1");
    //     var table2 = document.getElementById("table2");
    //     var check_tab1 = document.getElementsByName("check-tab1");

    //         for(var i=0; i< check_tab1.length;i++){
    //             if(check_tab1[i].checked){
    //                 var newRow = table2.insertRow(table2.length);
    //                 cell1=newRow.insertCell(0),
    //                 cell2=newRow.insertCell(1),
    //                 cell3=newRow.insertCell(2),
    //                 cell4=newRow.insertCell(3),
    //                 cell5=newRow.insertCell(4),
    //                 cell6=newRow.insertCell(5),
    //                 cell7=newRow.insertCell(6),
    //                 cell8=newRow.insertCell(7),
    //                 cell9=newRow.insertCell(8),
    //                 cell10=newRow.insertCell(9);

    //                 cell1.innerHTML = table1.rows[i].cell[0].innerHTML;
    //                 cell2.innerHTML = table1.rows[i].cell[1].innerHTML;
    //                 cell3.innerHTML = table1.rows[i].cell[2].innerHTML;
    //                 cell4.innerHTML = table1.rows[i].cell[3].innerHTML;
    //                 cell5.innerHTML = table1.rows[i].cell[4].innerHTML;
    //                 cell6.innerHTML = table1.rows[i].cell[5].innerHTML;
    //                 cell7.innerHTML = table1.rows[i].cell[6].innerHTML;
    //                 cell8.innerHTML = table1.rows[i].cell[7].innerHTML;
    //                 cell9.innerHTML = table1.rows[i].cell[8].innerHTML;
    //                 cell10.innerHTML = table1.rows[i].cell[9].innerHTML;

    //                console.log("checked",);
    //             }
    //         }
    // }

    // storing values in local storage
    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(formData))
    }, [formData]);

    return (
        <div>
            <form className="row g-3" onSubmit={formSubmit}>
                <div className='row mx-auto'>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="inputEmail4" value={taskName} name='taskName' onChange={formHandler} placeholder='Task name' />
                    </div>
                    <div className="col-md-4">
                        <select id="inputState" className="form-control selectCategory" name='selectCategory' value={selectCategory} onChange={formHandler}>
                            <option selected>select Category</option>
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
                    </div>
                    <div className="col-md-2">
                        <input type="password" className="form-control" id="inputPassword4" name='jiraId' value={jiraId} placeholder='Jira Id' onChange={formHandler} />
                    </div>
                </div>

                <div className='row mx-auto pt-3'>
                    <div className="col-md-3">
                        <select id="inputState" className="form-control selectAssignee" name='selectAssignee' onChange={formHandler} value={selectAssignee}>
                            <option selected>selectAssignee</option>
                            <option>
                                Bibhu
                            </option>
                            <option>
                                Tanzil
                            </option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <select id="inputState" className="form-control selectStatus" name='selectStatus' onChange={formHandler} value={selectStatus}>
                            <option selected>selectStatus</option>
                            <option>
                                In QC
                            </option>
                            <option>
                                On Hold
                            </option>
                            <option>
                                In Deployment
                            </option>
                        </select>
                    </div>
                    <div className=" col-md-3">
                        <input type="date" className="form-control createdDate" name='createdDate' onChange={formHandler} value={createdDate} id="inputAddress" />
                    </div>

                    <div className="col-md-3">
                        <input type="date" className="form-control dueDate" name='dueDate' onChange={formHandler} value={dueDate} id="inputAddress" />
                    </div>
                </div>

                <div className="row mx-auto col-12 pt-3">
                    <input type="text" className="form-control" id="inputAddress" placeholder="Mock Up" onChange={formHandler} name='mockUp' value={mockUp} />
                </div>

                <div className="row mx-auto col-12 pt-3">
                    <textarea className="form-control" id="inputAddress" placeholder="Other Comments" onChange={formHandler} name='otherComments' value={otherComments}></textarea>
                </div>

                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
            <hr />
            <div className='Fcontainer'>
                <h2>Tasks In Progress </h2>
                <form onSubmit={handleEditSaveSubmit}>
                    <table id='table1'>
                        <thead>
                            <tr>
                                <th>
                                   select
                                 </th>
                                <th>
                                    TASK NAME
                                </th>
                                <th>
                                    CREATED
                                </th>
                                <th>
                                    DUE
                                </th>
                                {/* <th>
                  GO LIVE
                </th> */}
                                <th>
                                    ASSIGNEE
                                </th>
                                <th>
                                    CATEGORY
                                </th>
                                <th>
                                    STATUS
                                </th>
                                <th>
                                    JIRA ID
                                </th>
                                <th>
                                    MOCK UP
                                </th>
                                <th>
                                    NOTES
                                </th>
                                <th>
                                    ACTIONS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockData.map((mockj) => (
                                <>
                                    {edit === mockj.jiraId && mockj.isTaskDone === false ? (<EditTable
                                        editDataForm={editDataForm}
                                        handleEditFormChange={handleEditFormChange}
                                        cancelClick={cancelClick}
                                        // tab1_to_tab2={tab1_to_tab2}
                                        // handleDoneButton ={handleDoneButton}
                                    />)
                                        : (
                                            <TableEdit
                                                mockj={mockj}
                                                handleEditClick={handleEditClick}
                                            />
                                        )}
                                </>
                            ))};
                        </tbody>
                    </table>
                </form>      
            </div>
            <div>
                {/* <button onClick={tab1_to_tab2}>
                    done
                </button> */}
            </div>

             
               
                <h2>Tasks Completed</h2>

                  <table id='table2'>
                    <thead>
                          <tr>
                          <th>
                                    TASK NAME
                                </th>
                                <th>
                                    CREATED
                                </th>
                                <th>
                                    DUE
                                </th>
                                {/* <th>
                  GO LIVE
                </th> */}
                                <th>
                                    ASSIGNEE
                                </th>
                                <th>
                                    CATEGORY
                                </th>
                                <th>
                                    STATUS
                                </th>
                                <th>
                                    JIRA ID
                                </th>
                                <th>
                                    MOCK UP
                                </th>
                                <th>
                                    NOTES
                                </th>
                                <th>
                                    ACTIONS
                                </th>
                          </tr>
                    </thead>
                    <tbody>
                           {/* <TaskCompleted done={done} /> */}
                    </tbody>
                  </table>

        </div>
    )
}

export default InputForm;

