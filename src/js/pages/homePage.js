import { logo } from "../components/icons/logo"
import levelHeading from "../components/ui/header"
import makeElement from "../utils/makeElement"


const homePage = function(params){
    const link = link('To dos', '/todos')
    const pageHeader = document.createElement('header')
    pageHeader.classList.add('page-header')
    pageHeader.appendChild(makeElement(logo()))
    // pageHeader.appendChild(link)
    
    return pageHeader
}
export default homePage