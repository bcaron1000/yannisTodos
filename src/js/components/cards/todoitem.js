import { isDate } from "lodash";
import makeElement from "../../utils/makeElement";


const todoitem = function ({ id, category, title, endDate, isComplete}) {
  
  let itemCategory = category;
  let status = "";
  let styling = "";
  let categoryTitle = "";

  if(isComplete === true ){
    status = "Completed"
  }else {
    status = "Incomplete"
  }


switch(itemCategory){

    case "work":
      styling = "work-style";
      categoryTitle = "Work"
      break;
    case "school":
      styling = "school-style";
      categoryTitle = "School "
      break;
    case "home":
      styling = "home-style";
      categoryTitle = "Home"
      break;
    case "social":
      styling = "social-style";
      categoryTitle = "Social"
      break;
    default:
      styling = "health-style";
      categoryTitle = "Health"
}

  const template = ` 
  <li class="card-style ${styling}" data-key="${id}">
    <div class="start-style">
    <h2>${categoryTitle} </h2>
    <h3>${title} </h3>
    <p>Due:${endDate}</p>
    <p>${status}</p> 
    </div>
    <div class="end-style" >
      <p data-key="${id}">
      <button id="editTodoItem">edit</button>
        <button id="deleteTodoItem" >delete</button>
      </p> 
    </div>
    </li> 
  `;
  return makeElement(template)
};

export default todoitem;