import makeElement from "../../utils/makeElement";


const todoitem = function ({ id, category, title, endDate, isComplete}) {
  
  
  let status = "";
  let styling = ""
  if(isComplete === true ){
    status = "Completed"
  }else {
    status = "Incomplete"
  }
  //Turn into a switch
  if (category === "work"){
    styling = "work-style"
  }else if(category === "school"){
    styling = "school-style"
  }else if(category === "home"){
    styling = "home-style"
  }else if (category === "social"){
    styling = "social-style"
  }else{
    styling = "health-style"
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