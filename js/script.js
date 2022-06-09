/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
//I created a function called showPage and the variables startIndex for the index of the first student and endIndex for the last student on the page.
//

function showPage(list, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  const studentList = document.querySelector(".student-list");
  //return showPage;
  //studentList.innerHTML = ('studentItem');
  studentList.innerHTML = "";
  //console.log("outside loop");
  for (let i = 0; i < list.length; i++) {
    //console.log("inside loop");
    if (i >= startIndex && i < endIndex) {
      const studentItem = `<li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
        <h3>${list[i].name.first} ${list[i].name.last}</h3>
        <span class="email">${list[i].email}</span>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${list[i].registered.date}</span>
      </div>
    </li>`
//console.log(studentItem);
      studentList.insertAdjacentHTML('beforeend', studentItem);
    
    }
  
  }
}
showPage(data, 1);
// showPage(data, 2);
// showPage(data, 3);
// showPage(data, 4);
// showPage(data, 5);

//   <div class="pagination">
//     <ul class="link-list">`

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   // create a variable to calculate the number of pages needed
   const numOfPages = Math.ceil(list.length/9);
    // select the element with a class of `link-list` and assign it to a variable
   const linkList = document.querySelector(".link-list");
   //console.log(linkList);
  
   // give the first pagination button a class of "active"
   const firstButton = `<  type="button" class="active">
                           document.querySelector("button${1}className = active")
]                       <li>
                           document.querySelector("button${2}")
                        </li>`
    // set the innerHTML property of the variable you just created to an empty string  
    linkList.innerHTML = "";
    //linkList.innerHTML = `<li>Jeanene is awesome</li>`                            
   // loop over the number of pages needed
   for (let i = 1; i <= numOfPages; i++) {
      // create the elements needed to display the pagination button
     // insert the above elements 
         let button = `<li> 
                        <button type="button">${i}</button>
                        </li>`;   
   // create an event listener on the `link-list` element
   // check if the clicked element is a button:
   linkList.insertAdjacentHTML("beforeend", button);
   linkList.addEventListener("click", (e) => { 
      if (e.target.tagName === "BUTTON")
       //select active element
         document.querySelector('.active'); 
          // remove the "active" class from the previous button by adding .className = ""; above
         //add active class to clicked button 
         if (e.target.className = "active");
        showPage(list, e.target.textContent);
});        
      
   }
  
                           //console.log(addPagination);
                           console.log(list);
}      
addPagination(data);    
//console.log(addEventListener);     
    
     


       // add the active class to the clicked button


       // call the showPage function passing the `list` parameter and page
       
       //showPage(list, page);

 //});  
// Call functions

//showPage(data, 1);


   
//console.log(data); 
