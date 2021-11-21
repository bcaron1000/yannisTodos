import { isDate } from "lodash";
import makeElement from "../../utils/makeElement";
import { isDate } from "lodash";

const todoitem = function ({ id, category, title, endDate, isComplete}) {


  let itemCategory = category;
  let status = "";
  let styling = "";
  let categoryTitle = "";
  let itemOverdue = "";
 
  if(isComplete == true ){
    status = `<span style="color:limegreen"><i class="fas fa-check-circle"></i></span>`
  }else {
    status = `<span style="color:red"><i class="fas fa-times-circle"></i></span>`
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
    ${status}
    </div>
    <div class="end-style" >
      <p data-key="${id}">
      <button id="editTodoItem"><span style="color:#5364FA"><i class="fas fa-edit"></i></span></button>
      <button id="deleteTodoItem"><span style="color:red"><i class="fas fa-trash"></i></span></button>
      </p> 
    </div>
    </li> 
  `;
  return makeElement(template)
};

export default todoitem;