
import makeElement from "~/src/js/utils/makeElement"


const levelHeading = function (className="ui-header", title="uiHeader", elem="h1"){

    const template = `<${elem} class="${className}">${title}</${elem}>`
    const element = makeElement(template)
    
    return element
}

export default levelHeading