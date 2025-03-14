document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".tic-tac-toe-container div");
  let resetBtn = document.querySelector(".reset-btn");
  //get all the buttons from the container
  const one = document.querySelector(".one");
  const two = document.querySelector(".two");
  const three = document.querySelector(".three");
  const four = document.querySelector(".four");
  const five = document.querySelector(".five");
  const six = document.querySelector(".six");
  const seven = document.querySelector(".seven");
  const eight = document.querySelector(".eight");
  const nine = document.querySelector(".nine");
  //we initialize this current player outside the event listener so that we can update it manually else it will keep the value constant on the click of the btn
  let currentPlayer = "*";
  // add an event listener to every button so that on click it can do something
  //first we use .forEach to get every single button
  //we dont use .map cz buttons is a nodelist not an array
  buttons.forEach((button) => {
    button.addEventListener("click", () => {

      document.getElementById("water-drop").play()
      //on click we want to start the game like enter either 0 or *
      //if the button is not empty update btn content to be current player which is  astar

      if (!button.textContent) {
        button.textContent = currentPlayer;
        //check if the player is winning after every move
        winning();
        //this means that the first time we go through the loop the current player
        //will be at * so since * is equivalent to * current player will be updated to 0 during the next click
        currentPlayer = currentPlayer === "*" ? "0" : "*";
      } else {
        alert("please click on an empty button");
      }
    });
  });

  function winning() {
    //first we show the winning sets in an array

    let wins = [
      [one, two, three],
      [four, five, six],
      [seven, eight, nine],
      [one, four, seven],
      [two, five, eight],
      [three, six, nine],
      [one, five, nine],
      [three, five, seven],
    ];

    wins.map((win) => {
      // assign a b c to rep the arrays in every single set
      let [a, b, c] = win;
      //check if a.textContent which reps one.textContent
      //matches b and c text content if so alert game won
      if (
        a.textContent &&
        a.textContent === b.textContent &&
        a.textContent === c.textContent
      ) {
        alert(`Player ${currentPlayer} has won the game 🎉🎉🎉`);

        

        reset();
      }
      // ...button converts nodelist in to an array .evry checks if all buttons meet the condition

      if ([...buttons].every((button) => button.textContent !== "")) {
        alert("its a draw 😃😃 ");

        reset();
      }
    });
  }

  resetBtn.addEventListener("click", () => {
    reset();
  });

  //here we are looping through each button and assign it to an empty string
  function reset() {
    buttons.forEach((button) => {
      button.textContent = "";
    });
  }


  localStorage.setItem('key', 'value')
});
