import { logo } from "../components/icons/logo";
import makeElement from "../utils/makeElement";
import { getStore } from "../redux/store";
import header from "../components/ui/header";
import button from "../components/ui/button/button";
import directory from "../components/cards/todoDirectory";
import todoitem from "../components/cards/todoitem";
import {Router} from "~/src/js/routes/router"

const todopage = function(){
    const page = document.createElement('div') 
    page.classList.add('wrapper')
    
    const mainHeader = document.createElement('header')
    mainHeader.classList.add('center-in-page') 
    
    const tagLine = header('tagline-style', "What is on the list today?")
    mainHeader.appendChild(makeElement(logo()))
    mainHeader.append(tagLine)
    page.append(mainHeader)

    const todoList = getStore()
    const container = directory()
    container.classList.add('directory')
    
    //Delete TodoItem
    function onDeleteTodoItem(e){
        const todoItemId = e.currentTarget.parentElement.dataset.key;
        
        
        Router('/delete', todoItemId)
    }
    // Edit TodoItem
    function onEditTodoItem(e){
        const todoItemId = e.currentTarget.parentElement.dataset.key;
        const todolistObject = todoList.find(tdl => tdl.id === todoItemId)
        Router('/edit', todolistObject)
    }
    function onAddTodoItem(e){
        Router('/add')
    }
    
    function render() {
        if (todoList !== null){
            const ul = container.querySelector('ul');
    
            const elements = todoList.map(tdl => todoitem(tdl));
            
            elements.forEach(element => {
                element.querySelector('#editTodoItem').addEventListener('click', onEditTodoItem)
                element.querySelector('#deleteTodoItem').addEventListener('click', onDeleteTodoItem)
                ul.append(element)
            });
            
            page.append(container);
        }
    }

    
    
   
    const mainFooter = document.createElement('footer')
    mainFooter.classList.add('foot-style')
    const addButton = button('Add +','footer-button', 'add')
    addButton.addEventListener('click', onAddTodoItem)
    mainFooter.appendChild(addButton)
    page.appendChild(mainFooter)
  

    render();
    return page
    
}

export default todopage