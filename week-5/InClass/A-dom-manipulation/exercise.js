/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
//Task 1.1
// let pTags = document.querySelectorAll('p');
// console.log(pTags);

// //Task 1.2 
// let firstDiv = document.querySelector('div');
// // alert('Thanks for visiting Bikes for Refugees');
// console.log('firstDiv', firstDiv);

// //Task 1.3
// let changeCol = document.getElementById('jumbotron-text');
// console.log('jumbotron-text', changeCol);

// //Task 1.4
// let psInPrimary = document.querySelectorAll('.primary-content p');
// console.log('ps In Primary', psInPrimary);


/*
Task 2
======
When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const alertButton = document.getElementById('alertBtn');

function changeAlert() {
    alert('Thanks for visiting Bikes for Refugees!')
}

alertButton.addEventListener('click', changeAlert)


/*
Task 3
=======
Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/


/*
Task 4
======
When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

const addSomeTextBtn = document.getElementById('addTextBtn');

addSomeTextBtn.addEventListener('click', () => {
    let newParaElement = document.createElement('p');
    newParaElement.innerText = 'This lives under the button paragraph tag';

    let learnMoreHeading = document.querySelector('.heading-underline');
    learnMoreHeading.appendChild(newParaElement);
})


/*
Task 5
======
When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

