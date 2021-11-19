import todopage from "~/src/js/pages/yannitodopage";
import home from "~/src/js/pages/yannihomepage";
import notFound from "~/src/js/pages/yanninotfoundpage";
import deletePage from "~/src/js/pages/delete";
import addPage from "~/src/js/pages/add";
import editPage from "~/src/js/pages/edit";

const routes = {
    "/": home,
    "/todopage": todopage,
    "/delete": deletePage,
    "/add": addPage,
    "/edit": editPage
}
const Router =  function(pathname, params=null){
    
    const isValidRoute = Object.keys(routes).find(key => key===pathname)    

    const app = document.querySelector('#app')
    app.innerHTML = ''
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
       if (isValidRoute === undefined){
           app.appendChild(notFound())
       }
   
       else{
    
         app.appendChild(routes[isValidRoute](params))
         //pass the value in here
       }
}

export {Router}