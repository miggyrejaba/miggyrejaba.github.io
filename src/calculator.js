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
      $("#calcValidate").text("NOT VALID");
      $("#calcValidate").css('background-color', 'red');
   }
}); 

