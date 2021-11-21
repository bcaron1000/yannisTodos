import { logo } from "~/src/js/components/icons/logo"
import makeElement from "~/src/js/utils/makeElement"
import button from "~/src/js/components/ui/button"
import reducer from "~/src/js/redux/reducers"
import { Router } from "../../routes/router"
import { getStore } from "../../redux/store"



const deletePage = function(props){
    
    //Delete  click button
    function onDeleteTodoItem(e){
        
    const index = getStore().findIndex((todoItemId)=>{
        
        return (todoItemId.id === props);
        
    });
    const action = {
        type: "delete",
        payload:{index},
        cb:()=> Router('/todopage')
    }
    reducer(action)
        
    }
    // cancel button
    function onCancelTodoItem(e){
        const action = {
            type:"cancel",
            payload:{},
            cb:()=>{Router('/todopage')}
        }
        reducer(action)
    }
    const page = document.createElement('div')
    const cancelButton = button('Cancel')
    const deleteButton = button('Delete')

    deleteButton.addEventListener('click',onDeleteTodoItem)
    cancelButton.addEventListener('click',onCancelTodoItem)
    let headerTemplate = `
    <header data-key="${props}" class="welcome center-in-page">
        <h1>Delete TodoItem</h1>
        <p>Delete todo item with ID</p>
        <div class="table"></div>
    </header>`
    const pageHeader = makeElement(headerTemplate)
    pageHeader.querySelector('div').append(cancelButton, deleteButton)
    page.append(pageHeader)
    return page
}

export default deletePage