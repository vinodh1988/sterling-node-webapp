//Callbacks in javascript

function myfun(param){
   console.log("running my fun");
   param("Star");
   console.log("finishing my fun");
   param("Sun");
   console.log("Clearing everything");
}//function definition

myfun( function(data){
	
	console.log("received",data);
});  // function call