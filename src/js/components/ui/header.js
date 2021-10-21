import makeElement from "../../utils/makeElement"


const levelHeading = function (className="ui-header", title="uiHeader"){

    const template = `<h1 class="${className}">${title}</h1>`
    const element = makeElement(template)

    return element
}

export default levelHeading