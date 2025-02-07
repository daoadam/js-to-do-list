//create a to do list

//features of a to do list

//a submit form
//an add button
//a display
//right-click delete 

//how it works? 
//*************submit form******************
//ask the user for input
//append the data onto a list

let displayList = document.querySelector(".displayList");
let actionList = []; //setting up an empty array

let addThisActivity = document.querySelector("#addThisActivity");


addThisActivity.addEventListener("submit", function(event){
    event.preventDefault(); //prevv ents page reload

    //extract the values 
    let action = document.querySelector("#action");
    //push the values onto the actionList array
    actionList.push(action.value);

    renderList()
    action.value = "";
})


function renderList(){
    displayList.innerHTML = "";

    actionList.forEach((task,index) => {
        let toDo = document.createElement("p");
        toDo.textContent = task;

        //right click to remove this specific iotem
        toDo.addEventListener("contextmenu", function(e) {
            e.preventDefault(); //prevent right click menu
            actionList.splice(index, 1);
            renderList()
        })

        displayList.appendChild(toDo);
    });
}


