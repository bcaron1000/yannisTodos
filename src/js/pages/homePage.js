import { logo } from "../components/icons/logo"
import makeElement from "../utils/makeElement"
import link from "./../components/ui/link"
import header from "./../components/ui/header"
import tagLine from "../components/ui/tagline"

const index = function(){
    const page = document.createElement('div') 
    const mainHeader = document.createElement('header')
    mainHeader.classList.add('center-in-page') 
    
  
    const homeLink = link("To Do's ", "/todoPage")
    homeLink.classList.add('link-styles')
    const tagline = tagLine('tagline-style', "We've got a list for you",'h2')
    mainHeader.appendChild(makeElement(logo()))
    mainHeader.append(tagline)
    mainHeader.append(homeLink)
    page.append(mainHeader)
    return page
}

export default index

