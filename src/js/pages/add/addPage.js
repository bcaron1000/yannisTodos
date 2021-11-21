import { logo } from "~/src/js/components/icons/logo"
import makeElement from "~/src/js/utils/makeElement"
import button from "~/src/js/components/ui/button"
import reducer from "../../redux/reducers"
import { Router } from "../../routes/router"
import { getStore } from "../../redux/store"
import keyGenerator from "../../utils/key"
import { isDate } from "lodash";
import { v4 as uuidv4} from 'uuid'

const addPage = function () {
    
    let TodoList = getStore();
    const newId = uuidv4().substr(0,8);;

    //Add item to store button
    function onAddTodoItem(e) { 
        var currentdate = new Date(); 
        var currentDate= currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear();
     
        var currentTime = currentdate.getHours() + ":"  
                       + currentdate.getMinutes() 

        let description = document.getElementById("todoItem").value;
        let itemCategory = document.getElementById("category").value
        let startDate = document.getElementById("startDate").value
        let startTime = document.getElementById("startTime").value
        let endDate = document.getElementById("endDate").value
        let endTime = document.getElementById("endTime").value
        let id = newId;

        const action = {
            type: "add",
            payload: {  id:id, 
                        category: itemCategory, 
                        title: description, 
                        startDate: startDate || currentDate,
                        startTime: startTime || currentTime,
                        endDate: endDate,
                        endTime:endTime,
                        isComplete: false},
            cb: () => Router('/todopage')
        }
        reducer(action)

    }
    // Cancel button
    function onCancelTodoItem(e) {
        const action = {
            type: "cancel",
            payload: {},
            cb: () => { Router('/todopage') }
        }
        reducer(action)
    }
    
    const page = document.createElement('div')
    const cancelButton = button('Cancel')
    const addButton = button('Add')

    addButton.addEventListener('click', onAddTodoItem)
    cancelButton.addEventListener('click', onCancelTodoItem)
    let headerTemplate = `
    <header class="welcome center-in-page">
        <h1>Add Todo Item</h1>
        <p>What would you like to add today?</p>
        <div class="editContainer frm-group">
        <div class="splitter">
        <label class="labelStyle">Category</label>
                        <select class="frm-control inputStyle" id="category">
                            <option value="school">School</option>
                            <option value="work">Work</option>
                            <option value="home">Home</option>
                            <option value="social">Social</option>
                            <option value="health">Health</option>
                        </select>
                    </div>
                    <div class="splitter">
                    <label class="labelStyle">Todo Description</label>
                        <input class="frm-control inputStyle" type="text" id="todoItem" size="30" placeholder="Add todo item....." />
                        </div>
                        <div class="splitter">
                        <label class="labelStyle">Start Date: </label>
                        <input class="frm-control inputStyleSmall" type="date" 
                        id="startDate" name="trip-start" value="" min="2018-01-01" max="2030-12-31">
                        <label class="labelStyle">Start Time</label>
                        <input class="frm-control inputStyleSmall" type="time" 
                        id="startTime" name="appt" min="00:00" max="24:00" value=""/>
                        </div>
                        <div class="splitter">
                        <label class="labelStyle">Due Date: </label>
                        <input class="frm-control inputStyleSmall" type="date" 
                        id="endDate" name="trip-start" value="" min="2018-01-01" max="2030-12-31">
                        <label class="labelStyle">End Time</label>
                        <input class="frm-control inputStyleSmall" type="time" 
                        id="endTime" name="appt" min="00:00" max="24:00" value=""/>
                        </div>
                    
                    
                </div>
       
        <section class="table">
        <section>
    </header>
    `
    const pageHeader = makeElement(headerTemplate)
    pageHeader.querySelector('section').append(cancelButton, addButton)
    page.append(pageHeader)
    
    return page
}
export default addPage