// TODO LIST (TM): 
// 1. Title
// 2. Directions
// 3. A button that says click to roll
// 4. A place to render what you get from the roll
// 5. A Button to clear the dice

const myButton = document.querySelector('#myButton');

//This creates a function called render to dom that takes in a div id and somesort of html that will go where the selected div lives
const renderToDom = (divId, htmlToRender) => {
  // Creates a const and uses a query selector to grab the div we want to target
    const selectedDiv = document.querySelector(divId);
  // Accessing the inner html of the selected div and setting it to be whatever html we need to render here
    selectedDiv.innerHTML = htmlToRender;
  };

myButton.addEventListener("click", () => { // event listener listening for the click of myButton
  const roller = () => { // starts new const sorting out rolelr math and return
    const randomNumber1 = Math.floor(Math.random() * 7) + 1 // the random number generator for the first die
    const randomNumber2 = Math.floor(Math.random() * 7) +1 // the random number generatpr fpr the second die
    const rollMessage = `You rolled ${randomNumber1} and ${randomNumber2}` // return message that returns the 2 random numbers and a message. 
    return rollMessage 
  }
  renderToDom("#rollCall", roller()) // rendering to the dom the random number to the rollCall div in out html
});

clear.addEventListener("click", () => { // targets a click event listener to the clear button
  renderToDom("#rollCall", " ") // clears the div of rollCall and sets the string to an empty string
});