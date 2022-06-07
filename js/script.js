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
  console.log("outside loop");
  for (let i = 0; i < list.length; i++) {
    console.log("inside loop");
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
console.log(studentItem);
      studentList.insertAdjacentHTML('beforeend', studentItem);
     
    }
  }
}
showPage(data, 1);
//   <div class="pagination">
//     <ul class="link-list">`

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions

console.log(data);

//https://randomuser.me/api/portraits/women/25.jpg