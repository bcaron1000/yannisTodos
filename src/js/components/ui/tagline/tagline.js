import makeElement from "~/src/js/utils/makeElement"


const tagLine = function (className="ui-header", title="uiHeader", elem="h2"){

    const template = `<${elem} class="${className}">${title}</${elem}>`
    const element = makeElement(template)
    
    return element
}

export default tagLine