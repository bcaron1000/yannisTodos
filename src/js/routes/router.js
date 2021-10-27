import todopage from "../pages/yannitodopage";
import home from "../pages/yannihomepage";
import notFound from "../pages/yanninotfoundpage";
/* 
     Route is a path to something .....file or function
     key value
     route   page.js ()
     pathname is one of the routes you set up.....
*/
const routes = {
    "/": home,
    "/todopage": todopage
}
const Router =  function(pathname){
    // turns the object into an array         Finds the key from the url and compares  
    const isValidRoute = Object.keys(routes).find(key => key===pathname)    

    const app = document.querySelector('#app')
    app.innerHTML = ''
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    // if isvalid route is some other shit i will run the page not found
       if (isValidRoute === undefined){
           app.appendChild(notFound())
       }
    // If isValid has a value it will run this block of code
       else{
    // pss the isValidRoute in like a variable  to define where its going
         app.appendChild(routes[isValidRoute]())
       }
}

export {Router}