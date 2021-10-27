// import { logo } from "../components/icons/logo"
// import makeElement from "../utils/makeElement"
// import { getStore } from "../redux/store"
// import header from "../components/ui/header"
// import button from "../components/ui/button"
// import directory from "../components/cards/todoDirectory"
// import todoitem from "../components/cards/todoitem"

// const todopage = function(){
//     const page = document.createElement('div') 
//     page.classList.add('wrapper')
    
//     const mainHeader = document.createElement('header')
//     mainHeader.classList.add('center-in-page') 
    
//     const tagLine = header('tagline-style', "What is on the list today?", 'h1')
//     mainHeader.appendChild(makeElement(logo()))
//     mainHeader.append(tagLine)
//     page.append(mainHeader)

//     const todoList = getStore()
    
//     const container = directory()
//     container.classList.add('directory')
//     if (todoList !== null){
//         const ul = container.querySelector('ul')

//         const elements = todoList.map(tdl => todoitem(tdl))
//         elements.forEach(element => ul.append(element))
//         page.append(container)
//     }

    
    
//     const mainFooter = document.createElement('footer')
//     mainFooter.classList.add('foot-style')
//     const addButton = button('Add +','footer-button', 'add')
//     mainFooter.appendChild(addButton)
//     page.appendChild(mainFooter)

//     return page
// }

// export default todopage