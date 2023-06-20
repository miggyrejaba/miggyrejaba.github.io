
  $( ".reg1" ).on( "click", function() {
      $("#regEx").text("(bab)*(b+a)(bab+aba)(a+b)*(aa+bb)*(b+a+bb)(a+b)*(aa+bb)*");
   } );

$( ".reg2" ).on( "click", function() {
      $("#regEx").text("(1+0)*(11+00)(00+11)*(1+0+11)(1+0+11)*(101+111)(101+111)*(1+0*+11)(1+0*+11)*");

   } );

  $(".dfa" ).on( "click", function() {
      $("#Dfa").text("DFA");
   } );

$(".pda" ).on( "click", function() {
      $("#Dfa").text("PDA");
   } );  

   $(".cfg" ).on( "click", function() {
      $("#Dfa").text("CFG");
   } );

$("#calcExecute" ).on( "click", function() {

   if($("#regEx").text()  === '(bab)*(b+a)(bab+aba)(a+b)*(aa+bb)*(b+a+bb)(a+b)*(aa+bb)' && $("#Dfa").text() === "DFA")
   {
      window.location.replace("letters.html");
   }
   else if($("#regEx").text()  === '(bab)*(b+a)(bab+aba)(a+b)*(aa+bb)*(b+a+bb)(a+b)*(aa+bb)' && $("#Dfa").text() === "PDA")
   {
      window.location.replace("pdaletter.html");
   }
   else if($("#regEx").text()  === '(bab)*(b+a)(bab+aba)(a+b)*(aa+bb)*(b+a+bb)(a+b)*(aa+bb)' && $("#Dfa").text() === "CFG")
   {
      window.location.replace("cfgletter.html");
   }
   else if($("#regEx").text()  === '(1+0)*(11+00)(00+11)*(1+0+11)(1+0+11)*(101+111)(101+111)*(1+0*+11)(1+0*+11)*' && $("#Dfa").text() === "DFA")
   {
      window.location.replace("numbers.html");
   }
   else if($("#regEx").text()  === '(1+0)*(11+00)(00+11)*(1+0+11)(1+0+11)*(101+111)(101+111)*(1+0*+11)(1+0*+11)*' && $("#Dfa").text() === "PDA")
   {
      window.location.replace("pdanumbers.html");
   }
   else if($("#regEx").text()  === '(1+0)*(11+00)(00+11)*(1+0+11)(1+0+11)*(101+111)(101+111)*(1+0*+11)(1+0*+11)*' && $("#Dfa").text() === "CFG")
   {
      window.location.replace("cfgnumbers.html");
   } else
   return false;
 } );

var regexChosen = "(1+0)*(11+00)(00+11)*(1+0+11)(1+0+11)*(101+111)(101+111)*(1+0*+11)(1+0*+11)**";

//Validation: If the string is not valid or valid
$("#calcExecuteInput").on( "click", function() {

   var inputString = $("#inpBox").val(); 
   var selectedDFA = $("#regEx").text();
   var isValid = false;
   if (selectedDFA === "(bab)*(b+a)(bab+aba)(a+b)*(aa+bb)*(b+a+bb)(a+b)*(aa+bb)") {
      isValid = /^((bab)*(b|a)(bab|aba)(a|b)*(aa|bb)*(b|a|bb)(a|b)*(aa|bb))$/.test(inputString); } 
   else if (selectedDFA ===  "(1+0)*(11+00)(00+11)*(1+0+11)(1+0+11)*(101+111)(101+111)*(1+0*+11)(1+0*+11)*") {
      isValid =/^((1|0)*(11|00)(00|11)*(1|0|11)(1|0|11)*(101|111)(101|111)*(1|0*|11)(1|0*|11)*)*$/.test(inputString);
   }
   if (isValid) {
   $("#calcValidate").text("VALID");
   $("#calcValidate").css('background-color', 'green');
   }
   else {
      $("#calcValidate").text("INVALID");
      $("#calcValidate").css('background-color', 'red');
   }
   }); 

class DFA {
   constructor(alphabet, states, initial_state, final_states, transitions) {
     this.alphabet = alphabet; // Set of symbols
     this.states = states; // Set of states
     this.initial_state = initial_state; // Start state
     this.final_states = final_states; // Set of final states
     this.transitions = transitions; // transition function
     this.path = []; // array for visited states
   }
 
   execute(input) { // method for dfa execution
     this.path = []; // clear visited states array
     let currentState = this.initial_state; // initialize current state to the start state
     this.path.push(currentState); // add the start state to the path array
 
     for (let symbol of input) { // process each symbol in input string (a,b)
       const transitionKey = `${currentState}.${symbol}`; // key to lookup the transition
       currentState = this.transitions[transitionKey]; // get the next state from the transition
       this.path.push(currentState); // add the next state to the path array
     }
 
     return this.final_states.includes(currentState); // check if the final state is one of the specified final states 
   }
 }

const numbers = new DFA(
   ["1", "0"], // alphabet
   ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8'], // states
   "q0", // start state
   ["q8"], // final state 
   { // transitions
      "q0.0":"q1", "q0.1":"q2", // 0 q0
      "q1.0":"q3", "q1.1":"q2", // 3 q1
      "q2.0":"q1", "q2.1":"q3", // 4 q2
      "q3.0":"q4", "q3.1":"q4", // 5 q3
      "q4.0":"q4", "q4.1":"q5", // 6 q4
      "q5.0":"q7", "q5.1":"q6", // 7 q5
      "q6.0":"q7", "q6.1":"q8", // 9 q6
      "q7.0":"q4", "q7.1":"q8", // 8 q7
      "q8.0":"q8", "q8.1":"q8", // 2 q8                 
   } 
)

// takes ID of Simulate and String Input elements
const simulateButton = document.querySelector("#strSimulate");
const inputBox = document.querySelector("#inpBox");

simulateButton.addEventListener("click", () => { // add click event listener to Simulate element
   const userInput = inputBox.value;// takes user input value from String Input element
   const result = numbers.execute(userInput); // Validating

   for (let index = 0; index < numbers.path.length; index++) { // for loop iterates over each element 
      const current_state = document.getElementById(numbers.path[index]); // gets current state of element
      const className = numbers.path.length - 1 === index ? (result ? "valid_state" : "invalid_state") : "valid_state"; // determine the css class name and add based on current index and validation result 
     addAndRemoveClassWithDelay(current_state, className, 5000, 0); // specifies the delay between validation ticks
   }
});

async function addAndRemoveClassWithDelay(element, className, addDelay, removeDelay) {
   element.classList.add(className); // add css to the element
   await sleep(addDelay); // pause execution for the specified addDelay duration
   element.classList.remove(className);   // remove css to the element
   await sleep(removeDelay); // pause execution for the specified rmeoveDelay duration
}

// Pause execution for the specified time duration
function sleep(ms) {    
   return new Promise((resolve) => setTimeout(resolve, ms));
}