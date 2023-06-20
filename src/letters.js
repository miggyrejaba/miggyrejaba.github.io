$( ".reg1" ).on( "click", function() {
   $("#regEx").text("(bab)*(b+a)(bab+aba)(a+b)*(aa+bb)*(b+a+bb)(a+b)*(aa+bb)");
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
event.preventDefault();
var regChosen = $("#regEx").text();
var dfaChosen = $("#Dfa").text();
$(".regexChosen").text(regChosen);
$(".automataChosen").text(dfaChosen);

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
     this.states = states;     // Set of states
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
 
 const letters = new DFA(
   ["a", "b"], // alphabet
   ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10', 'q11', 'q12', 'q13', 'q14'], // states
   "q0", // start state
   ["q13", "q14"], // final states
   {
     "q0.a": "q1", "q0.b": "q2", // transitions
     "q1.a": "q3", "q1.b": "q4",
     "q2.a": "q5", "q2.b": "q4",
     "q3.b": "q6",
     "q4.a": "q7",
     "q5.b": "q8",
     "q6.a": "q9",
     "q7.b": "q9",
     "q8.a": "q9", "q8.b": "q2",
     "q9.a": "q10", "q9.b": "q10",
     "q10.a": "q11", "q10.b": "q12",
     "q11.a": "q13", "q11.b": "q12",
     "q12.a": "q11", "q12.b": "q14",
     "q13.a": "q13", "q13.b": "q12",
     "q14.a": "q11", "q14.b": "q14",
   }
 );

// takes ID of Simulate and String Input elements
const simulateButton = document.querySelector("#strSimulate");
const inputBox = document.querySelector("#inpBox");


simulateButton.addEventListener("click",  () => {   // add click event listener to Simulate element
   const userInput = inputBox.value;                     // takes user input value from String Input element
   const result = letters.execute(userInput);            // Validating

   for (let index = 0; index < letters.path.length; index++) {       // for loop iterates over each element 
      const current_state = document.getElementById(letters.path[index]); // gets current state of element
      const className = letters.path.length - 1 === index ? (result ? "valid_state" : "invalid_state") : "valid_state"; // determine the css class name and add based on current index and validation result 
       addAndRemoveClassWithDelay(current_state, className, 5000, 0);  // specifies the delay between validation ticks
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
            
