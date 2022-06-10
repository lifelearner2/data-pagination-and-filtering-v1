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
                                                   */ //I will be commenting on things that I want someone else to know and also things that I want to remember about this code.
                                                   //I created a function called showPage and the variables startIndex for the index of the first student and endIndex for the last student on the page.
                                                   //Line 31 requires that there be separate ${} for the first and last name otherwise they will run into each other with no spacing on the web page

function showPage(list, page) {
  const startIndex = page * 9 - 9;
  const endIndex = page * 9;
  const studentList = document.querySelector(".student-list");       //that dot before student means it's a "class"
 
         studentList.innerHTML = "";
         for (let i = 0; i < list.length; i++) {
            if (i >= startIndex && i < endIndex) {                   //Always remember that the && represents the word "AND". HTML tags must be in a template literal with back tics
               const studentItem =                                   //Must use ${} and dot notation for the elements that I changing to represent additional info or data.
               `<li class="student-item cf">             
                <div class="student-details">
                <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
                <h3>${list[i].name.first} ${list[i].name.last}</h3> 
                <span class="email">${list[i].email}</span>
                </div>
                <div class="joined-details">
                <span class="date">Joined ${list[i].registered.date}</span>
                </div>
                </li>`

         studentList.insertAdjacentHTML('beforeend', studentItem); 
                                                                     //the insert adjacent above allows you to add info to the HTML without changing what's currently there. Not the same as innerHTML.
            } 
  }
}
showPage(data, 1);                                    //calling the showPage function and passing the data and 1 arguments
                                                      // showPage(data, 2);
                                                      // showPage(data, 3);
                                                      // showPage(data, 4);
                                                      // showPage(data, 5);
                                                      //I'm keeping the commented out showPage above as it reminds me that this is how I was able to view each page info when I first started the project.
                                                      /*
                                                      Create the `addPagination` function
                                                      This function will create and insert/append the elements needed for the pagination buttons
                                                      */
function addPagination(list) {
                                                      // create a variable to calculate the number of pages needed
   const numOfPages = Math.ceil(list.length/9);       //the "/" after length is the symbol to divide. We are dividing the number of students(42) by the number of students on each page (9)
                                                      //the answer is actually 4.66 but the Math.ceil rounds it up to 5 - which is the number of pages we will have.
                                                      //I initially created a variable for the "items per page(number of students per page)" but since I just put the number 9 there instead of the 
                                                      //variable name - there was really no need for me to keep the variable there - according to Treehouse support.
                                                      // select the element with a class of `link-list` and assign it to a variable
   const linkList = document.querySelector(".link-list");
                                                      //console.log(linkList);                           
                                                      //I'm keeping this here to remind myself that I can console.log every line I create to make sure it's logging info to the console.
  

                                                      // set the innerHTML property of the variable you just created to an empty string  
   linkList.innerHTML = "";                           //This removes any page buttons that were displayed previously
                                                      //Fun fact: This commented out code below made the statement 'Jeanene is awesome' populate where the buttons were to go.
                                                      //linkList.innerHTML = `<li>Jeanene is awesome</li>`*
                                                      // loop over the number of pages needed
   for (let i = 1; i <= numOfPages; i++) {            //This index will begin at one instead of zero since our buttons start at one.
                                                      // create the elements needed to display the pagination button
                                                      // insert the above elements 
                                                      //I want to remember that initially when experimenting with the code to show it to the page 
                                                      //I used a += with different text and it worked but in the end 
                                                      //when working with the Treehouse specialist on different ways to make the same thing happen, 
                                                      //I agreed that using the let variable made the most sense if someone else were viewing how the code looked.
         let button =                                 //also you can not comment out back ticks with the html tags because it would accept anything into the code
                     `<li> 
                     <button type="button">${i}</button>
                     </li>`;   
                                                      // create an event listener on the `link-list` element
                                                      //An event listener is listening for the event of a click of a button.
                                                      // check if the clicked element is a button:
   linkList.insertAdjacentHTML("beforeend", button) };
                                                      // give the first pagination button a class of "active". Whenever you are doing anything with a "class" you must put a dot in front of the word.
   document.querySelector("button").className = "active";
   linkList.addEventListener("click", (e) => {        //e rep "event" and I used an arrow function
                                                      //console.log(e.target === "BUTTON"); 
                                                      //It is important to console.log everything as you code. This one is going to print to the console "false" 
                                                      //after I click a button. Also - remember that whenever you use "e.target === the next 
                                                      //word in quotes must be in ALL CAPS! If you put it in lower case you won't get 
                                                      //an error but it also will not be doing what it's supposed to be doing.
         if (e.target.tagName === "BUTTON"){
                                                      //console.log(e.target.tagName);
                                                      //The console.log above will print the word BUTTON to the console whenever you click one of the buttons...
                                                      //but it must be in ALL CAPS. .tagName refers to pulling info from the HTML tag
                                                      //e.target refers to the event or action of clicking the button.
                                                      //select active element
         document.querySelector(".active").className = ""; 
                                                      //remove the "active" class from the previous button by adding .className = ""; above
                                                      //so - if I were to delete the .className = empty string the buttons still functioned but all the buttons remained blue in color as they were 
                                                      //all still "active". The empty string is what removes the active state from the button when another button is pressed.
                                                      //add active class to clicked button 
         e.target.className = "active";               //This line of code made all the buttons work perfectly! Very important line of code right here!
         showPage(list, e.target.textContent);    
      }                                               //This showPage function is being called from the addPagination function because it needs to access the event listener. 
});                                                   //the "text content" in this pagination function is referring to the actual text on the button like "1, 2, 3, 4, 5"
                                                      //console.log(list); log constantly
}      

                                                      // Call functions. So you can not call a function inside that same function. But you can call a function from inside another function.
                                                      //If you're not calling it from another function - it should be called outside of that and any function like it, as it is below.

showPage(data, 1);
addPagination(data);
                                                      //console.log(data); This log is so important. I was able to see the key words (after clicking on the arrows to expand) on how I should 
                                                      //word my "if" info in the showPage function. The words like list, picture, medium, registered etc...all hold the imfo that follows it in the console. 
