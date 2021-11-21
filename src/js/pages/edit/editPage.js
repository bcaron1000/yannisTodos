import makeElement from "~/src/js/utils/makeElement"
import button from "~/src/js/components/ui/button"
import reducer from "../../redux/reducers"
import { Router } from "../../routes/router"
import { getStore } from "../../redux/store"

const editPage = function (props) {
   // Cancel Button
    function onCancelTodoItem(e) {
        const action = {
            type: "cancel",
            payload: {},
            cb: () => { Router('/todopage') }
        }
        reducer(action)
    }
    // Submit Button
    function onEditTodoItem(e) {
        const index = getStore().findIndex((todoItemId)=>{
        
            return (todoItemId.id === props.id);
        });

        let description = document.getElementById("todoItem").value;
        let itemCategory = document.getElementById("category").value
        let startDate = document.getElementById("startDate").value
        let startTime = document.getElementById("startTime").value
        let endDate = document.getElementById("endDate").value
        let endTime = document.getElementById("endTime").value
        let complete = document.getElementById("completed").value
        let id = props.id;

        if (complete === "true"){
            complete = true
            endTime = currentTime
        }else{
            complete = false
        }
        const action = {
            type: "edit",
            payload: {  id:id, 
                        category: itemCategory, 
                        title: description, 
                        startDate: startDate,
                        startTime: startTime,
                        endDate: endDate,
                        endTime:endTime,
                        isComplete: complete},
                        itemIndex: index,
            cb: () => Router('/todopage')
        }
        reducer(action)
    }
        
        let id = props.id;
        let description = props.title
        let itemCategory = props.category
        let itemComplete = props.isComplete;
        let startDate = props.startDate;
        let startTime = props.startTime;
        let endDate = props.endDate
        let endTime = props.endTime
        console.log(itemComplete);

        let completedTemplate
        if (itemComplete === true){
            completedTemplate =
                    `   <option value=true selected>Completed</option>
                        <option value=false >Still working on it</option>`
        }else{
            completedTemplate =
                    `   <option value=true >Completed</option>
                        <option value=false selected>Still working on it</option>`
        }

        let categoryTemplate
        if (itemCategory === "school"){
        categoryTemplate =
                    `   <option value="school" selected>School</option>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                        <option value="social">Social</option>
                        <option value="health">Health</option>`
       }
        else if (itemCategory === "work"){
        categoryTemplate =
                    `   <option value="school" >School</option>
                        <option value="work" selected>Work</option>
                        <option value="home">Home</option>
                        <option value="social">Social</option>
                        <option value="health">Health</option>`
       }
       else if (itemCategory === "home"){
        categoryTemplate =
                    `   <option value="school" >School</option>
                        <option value="work" >Work</option>
                        <option value="home" selected>Home</option>
                        <option value="social">Social</option>
                        <option value="health">Health</option>`
       }
       else if (itemCategory === "social"){
        categoryTemplate =
                    `   <option value="school" >School</option>
                        <option value="work" >Work</option>
                        <option value="home" >Home</option>
                        <option value="social" selected>Social</option>
                        <option value="health">Health</option>`
       }
       else if (itemCategory === "health"){
        categoryTemplate =
                    `   <option value="school" >School</option>
                        <option value="work" >Work</option>
                        <option value="home" >Home</option>
                        <option value="social" >Social</option>
                        <option value="health" selected>Health</option>`
       }

        
        
    const page = document.createElement('div')
    const cancelButton = button('Cancel')
    const submitButton = button('Update')

    submitButton.addEventListener('click', onEditTodoItem)
    cancelButton.addEventListener('click', onCancelTodoItem)
    let headerTemplate = `
    <header class="welcome center-in-page">
        <h1>Edit Todo Item</h1>
        <p>What would you like change?</p>
        <div class="editContainer frm-group" data-key="${id}">
            <label class="labelStyle">id: ${id}</label>
                <div class="splitter">
                <label class="labelStyle">Category: </label>
                <select class="frm-control inputStyleSmall" 
                id="category" value="${itemCategory}">
                ${categoryTemplate}
                </select>
                <label class="labelStyle">Complete: </label>
                <select class="frm-control inputStyleSmall" 
                id="completed">
                ${completedTemplate}
                </select>
                </div>
                <div class="splitter">
                <label class="labelStyle">Todo Description: </label>
                <input class="frm-control inputStyle" type="text" 
                id="todoItem" size="30" placeholder="Add todo item....." value="${description}"/>
                </div>
                <div class="splitter">
                <label class="labelStyle">Start Date: </label>
                <input class="frm-control inputStyleSmall" type="date" 
                id="startDate" name="trip-start" value="${startDate}" min="2018-01-01" max="2030-12-31">
                <label class="labelStyle">Start Time</label>
                <input class="frm-control inputStyleSmall" type="time" 
                id="startTime" name="appt" min="00:00" max="24:00" value="${startTime}"/>
                </div>
                <div class="splitter">
                <label class="labelStyle">Due Date: </label>
                <input class="frm-control inputStyleSmall" type="date" 
                id="endDate" name="trip-start" value="${endDate}" min="2018-01-01" max="2030-12-31">
                <label class="labelStyle">End Time</label>
                <input class="frm-control inputStyleSmall" type="time" 
                id="endTime" name="appt" min="00:00" max="24:00" value="${endTime}"/>
                </div>
                
                
                
            </div>
        
        <section class="table">
        <section>
    </header>
    `
    const pageHeader = makeElement(headerTemplate)
    pageHeader.querySelector('section').append(cancelButton, submitButton)
    page.append(pageHeader)
    return page
}

export default editPage