import makeElement from "../../utils/makeElement";


const todoitem = function ({ id, category, title, endDate, isComplete}) {
  
  
  let status = "";
  let styling = ""
  if(isComplete === true ){
    status = "Completed"
  }else {
    status = "Incomplete"
  }
let itemCategory = category;

switch(itemCategory){

    case "work":
      styling = "work-style";
      break;
    case "school":
      styling = "school-style";
      break;
    case "home":
      styling = "home-style";
      break;
    case "social":
      styling = "social-style";
      break;
    default:
      styling = "health-style";
}

  const template = ` 
  <li class="card-style ${styling}" data-key="${id}">
    <div class="start-style">
    <h2>${title} </h2>
    <p>Due: ${endDate}</p>
    <p>${status}</p> 
    </div>
    <div class="end-style">
    
    <p class="controls"><button>edit</button>
    <button>delete</button></p> 
    </div>
    </li> 
  `;
  return makeElement(template)
};

export default todoitem;