import { logo } from "~/src/js/components/icons/logo"
import makeElement from "~/src/js/utils/makeElement"
import button from "~/src/js/components/ui/button"
import reducer from "../../redux/reducers"
import { Router } from "../../routes/router"
import { getStore } from "../../redux/store"
import keyGenerator from "../../utils/key"
import { isDate } from "lodash";


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
        var currentdate = new Date(); 
        var currentDate= currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear();
     
        var currentTime = currentdate.getHours() + ":"  
                       + currentdate.getMinutes() 

        let description = document.getElementById("todoItem").value;
        let itemCategory = document.getElementById("category").value
        let dueDate = document.getElementById("endDate").value
        let endTime = document.getElementById("endTime").value
        let complete = document.getElementById("completed").value
        let id = props.id;

        const action = {
            type: "edit",
            payload: {  id:id, 
                        category: itemCategory, 
                        title: description, 
                        startDate: currentDate,
                        startTime: currentTime,
                        endDate: dueDate,
                        endTime:endTime,
                        isComplete: complete},
                        itemIndex: index,
            cb: () => Router('/todopage')
        }
        reducer(action)
    }
        var currentdate = new Date(); 
        var currentDate= currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear();
     
        var currentTime = currentdate.getHours() + ":"  
                       + currentdate.getMinutes() 

        let description = props.title
        let itemCategory = props.category
        let dueDate = props.endDate
        let endTime = props.endTime
        let id = props.id;
        let itemComplete = props.isComplete;
        console.log(itemComplete);

       

        document.getElementById('completed').value=itemComplete;
        // const completedDDDL = document.getElementById("completed")
        // selectItemByValue(completedDDDL, itemComplete)
        // function selectItemByValue(elmnt, value){
        //     for(var i=0; i < elmnt.options.length; i++)
        //     {
        //       if(elmnt.options[i].value === value) {
        //         elmnt.selectedIndex = i;
        //         break;
        //       }
        //     }
        //   }
        //Add something in to select the category and the completed status
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
                
                <label class="labelStyle">Todo Description</label>
                <input class="frm-control inputStyle" type="text" id="todoItem" size="30" placeholder="Add todo item....." value="${description}"/>
                <label class="labelStyle">Due Date</label>
                <input class="frm-control inputStyle" type="date" id="endDate" name="trip-start" value="${dueDate}" min="2018-01-01" max="2030-12-31">
                <label class="labelStyle">End Time</label>
                <input class="frm-control inputStyle" type="time" id="endTime" name="appt" min="00:00" max="24:00" value="${endTime}"/>
                    
                <label class="labelStyle">Complete</label>
                <select class="frm-control inputStyle" id="completed">
                        <option value=true >Completed</option>
                        <option value=true >Still working on it</option>
                    </select>
                
                <label class="labelStyle">Category</label>
                    <select class="frm-control inputStyle" id="category" value="${itemCategory}">
                        <option value="school">School</option>
                        <option value="work">Work</option>
                        <option value="home">Home</option>
                        <option value="social">Social</option>
                        <option value="health">Health</option>
                    </select>
                
                
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