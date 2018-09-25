/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

function joinList(array){
  var string = "";

  for(var i = 0; i < array.length; i++){
    if(i == array.length - 1){
      string += array[i];
    }
    else{
      string += array[i] + ", ";
    }
  }

  return string;
}
 // a custom function written by you (you must define it too!)

var concepts = joinList(conceptList);

// Write your code here...

console.log("Today I learned about " + concepts + ".");

