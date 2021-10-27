// import { logo } from "../components/icons/logo"
// import makeElement from "../utils/makeElement"
// import link from "../components/ui/link"
// import header from "../components/ui/header"
// import tagLine from "../components/ui/tagline"


// const index = function(){
//     const page = document.createElement('div') 
//     page.classList.add('center-in-page') 
    
//     const mainHeader = document.createElement('div')
//     mainHeader.classList.add('page-header')
    
//     const tagline = tagLine('tagline-style', "Sorry the Page you have requested is not available")

//     const mainBody = document.createElement('div')
//     mainBody.classList.add('body-error-style')
//     const returnLink = link("Take me back ", "/")
//     const error = header('error-style', "404 error",'h2')
//     const errMsg = header('error-string-style', 'Seems Like we could not find the page you were looking for.', 'h2')
//     returnLink.classList.add('link-styles')

//     mainHeader.appendChild(makeElement(logo()))
//     mainHeader.append(tagline)
//     mainBody.append(error)
//     mainBody.append(errMsg)
//     mainBody.append(returnLink)
//     page.append(mainHeader)
//     page.append(mainBody)
//     return page
// }

// export default index