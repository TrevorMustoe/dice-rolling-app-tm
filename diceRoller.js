// TODO LIST (TM): 
// 1. Title
// 2. Directions
// 3. A button that says click to roll
// 4. A place to render what you get from the roll
// 5. A function that returns two random numbers between 1 and 6
// 6. A Button to clear the dice

const myButton = document.querySelector('#myButton');

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}

myButton.addEventListener("click", () => { 
  const roller = () => {
    const randomNumber1 = Math.floor(Math.random() * 6) +1
    const randomNumber2 = Math.floor(Math.random() * 6) +1
    const rollMessage = `You Rolled ${randomNumber1} and ${randomNumber2}`
    return rollMessage
  }
  renderToDom('#rollCall', roller())
})

clear.addEventListener("click", () =>{
  renderToDom("#rollCall", " ")
})
