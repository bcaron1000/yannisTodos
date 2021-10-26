import makeElement from './../../utils/makeElement'

const directory = function (){
    const template = `
    <aside id="directory" class="directory">
    
    <ul id="todos" class="todoList">
     
    </ul>
    <footer>

    </footer>
</aside>
    `

    return makeElement(template)
}

export default directory