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
      const numOfPages = 5;
      const button = ("Next Page");

      for (let i = 1; i <= numOfPages; i++) {
            `<li>
            <button type="button">1</button>
            </li>
               linkList.insertAdjacentHTML('beforeend', button);
            <li>
                <button type="firstButton" class="active">${button[i].firstPage}</button>
            </li>
            <li>
                 <button type="button">${button[i].nextPage}</>
            </li>` 
               document.querySelector(".className")
               numOfPages = Math.ceil(list.length, numOfPages ++, 9);{
                  const linkList = document.querySelector(".link-list");
                  document.getElementById("link-list").innerHTML("button");
                  linkList.innerHTML = "";
      }
   
         linkList.addEventListener("click", (e) => {
            const nextPage =
            `<li>
            <button type="button" class="active">${button[i].firstButton}</button>
            </li>
            <li>
            <button type="button">${button[i].nextPage}</>
            </li>` 
           
            if (click.target.ul = button) {
               document.querySelector(".className = active")
               className = '';
               document.querySelector(".className.click.target = active")
               document.querySelector("remove active class from previous button")
               showPage(list.textContent);
               addPagination(data);
               showPage(data, 1)
               showPage(list, 1);
            };
        
         //let btn = document.createElement("button");
         //console.log(list);
          });

     
            //removeEventListener()

        };        
      
      };
   
// Call functions

showPage(data, 1);
//addPagination(data);

   
console.log(data); 
