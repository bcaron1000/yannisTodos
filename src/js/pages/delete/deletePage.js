import { logo } from "~/src/js/components/icons/logo"
import makeElement from "~/src/js/utils/makeElement"
import button from "~/src/js/components/ui/button"
import reducer from "../../redux/reducers"
import { Router } from "../../routes/router"
import { getStore } from "../../redux/store"



const deletePage = function(props){
    console.log(props);
    const page = document.createElement('div')
    const cancelButton = button('Cancel')
    const deleteButton = button('Delete')
    
    function onDeleteTodoItem(e){
        
    const index = getStore().findIndex((todoItemId)=>{
        
        return (todoItemId.id === props);
        
    });
    console.log(index);
    const action = {
        type: "delete",
        payload:{index},
        cb:()=> Router('/todopage')
    }
    reducer(action)
        
    }
    function onCancelTodoItem(e){
        const action = {
            type:"cancel",
            payload:{},
            cb:()=>{Router('/todopage')}
        }
        reducer(action)
    }


    deleteButton.addEventListener('click',onDeleteTodoItem)
    cancelButton.addEventListener('click',onCancelTodoItem)
    let headerTemplate = `
    <header data-key="${props}" class="welcome center-in-page">
        <h1>Delete TodoItem</h1>
        <p>Delete todo item with ID</p>
        <div class="delete-table"></div>
    </header>`
    const pageHeader = makeElement(headerTemplate)
    pageHeader.querySelector('div').append(cancelButton, deleteButton)
    page.append(pageHeader)
    return page
}

export default deletePage