import makeElement from "~/src/js/utils/makeElement"


const mainSection = function (className="ui-header", title="uiHeader", elem="h1"){

    const template = `<div class="${className}">${title}</div>`
    const element = makeElement(template)
    
    return element
}

export default mainSection