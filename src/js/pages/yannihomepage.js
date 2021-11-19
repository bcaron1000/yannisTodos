import { logo } from "~/src/js/components/icons/logo"
import makeElement from "~/src/js/utils/makeElement"
import link from "~/src/js/components/ui/link/link"
import header from "~/src/js/components/ui/header"
import tagLine from "~/src/js/components/ui/tagline"

const index = function(){
    const page = document.createElement('div') 
    const mainHeader = document.createElement('header')
    mainHeader.classList.add('center-in-page') 
    
  
    const homeLink = link("To Do's ", "/todopage")
    homeLink.classList.add('link-styles')
    const tagline = tagLine('tagline-style', "We've got a list for you",'h2')
    mainHeader.appendChild(makeElement(logo()))
    mainHeader.append(tagline)
    mainHeader.append(homeLink)
    page.append(mainHeader)
    return page
}

export default index

