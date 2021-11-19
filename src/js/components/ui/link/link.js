import {Router} from "~/src/js/routes/router";
import makeElement from "~/src/js/utils/makeElement"

const onRequestPage = function(e){
    e.preventDefault();
    Router(e.currentTarget.dataset.path);
    return false;
}

const link = function (label="ui link", path="/", className="ui-link"){
    const template = `<a href="${path}" data-path="${path}">${label}</a>`
    const element = makeElement(template)
    element.addEventListener('click', onRequestPage)

    return element
     
}

export default link