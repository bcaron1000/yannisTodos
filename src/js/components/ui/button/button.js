import makeElement from "~/src/js/utils/makeElement"


const button = function (label="ui button", className="ui-button", action=""){
     const template = `<button class="${className}">${label}</button>`
     const element = makeElement(template);

     return element

     
}

export default button