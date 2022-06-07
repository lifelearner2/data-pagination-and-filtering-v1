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
function showPage(list, page) {
  const startIndex = (page * 9) - 9;
  const endIndex = (page * 9);
  const studentList = document.getElementsByClassName("student-list");
  
  studentList.innerHTML = ('');
   for ( let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         
        li ="student-item cf";
        let studentItem ="student-details" (`img class="avatar" src="js.data.js" alt="Profile, Picture`)
        let h3 = "Name";
        span_class="email";
        div = "data";
        div_class="joined-details";
        span_lass="date";
        div
        li

         showPage[data];

     
 
   //   <div class="pagination">
   //     <ul class="link-list">`    
   //return studentItem;
   return showPage;

      }
        ;
  
};
};
showPage(data);

   
  
  





/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
