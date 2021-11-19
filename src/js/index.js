import {Router} from "./routes/router";
import { createStore } from "./redux/store";
import { dataFetcher } from "./utils/dataFetcher";
import keyGenerator from "./utils/key";


const app = document.querySelector("#app");


const onAppInit = async function(e){
    let todoItems = await dataFetcher('./data/todos.json')

    // DEMO IF THE DATA DOESN'T HAVE SOME UNIQUE KEY
    // example for this data as there is no unique id
    if(todoItems[0].id === undefined){
        todoItems = [...keyGenerator(todoItems)]
    }

    createStore(todoItems)
    Router(window.location.pathname)
   
}

window.addEventListener('load', onAppInit)






