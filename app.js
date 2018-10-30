/***************************************************************************
1. Create a brand new Express app from scratch.
2. Create a package.json using npm init and add express dependency.
3. In your main app.js files, add 3 different routes.

Visiting "/" should print "Hi there, welcome to my assignment!"
================================================================
Visiting "/speak/pig" should print "The pig says 'Oink'"
Visiting "/speak/cow" should print "The cow says 'Moo'"
Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"
================================================================
Visiting "/repeat/hello/3" should print "hello hello hello"
Visiting "/repeat/hello/5" should print "hello hello hello hello hello"
Visiting "/repeat/blah/2" should print "blah blah"
================================================================
If a user visits any other route, print:
"Sorry, page not found... What are you doing with your life?"
****************************************************************************/

var express = require('express');
var app = express();

// =====================================
// ROUTES
// =====================================

// Visiting "/" should print "Hi there, welcome to my assignment!"
app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

// THIS IS MY SOLUTION FOR /speak/:animal ROUTE - USING CASE
/***********************************************************
app.get("/speak/:animal", function(req, res){
  var animal = req.params.animal;
  var animalSound = "";

  switch (animal) {
    case "pig":
      animalSound = "Oink!";
      break;
    case "cow":
      animalSound = "Moo!";
      break;
    case "dog":
      animalSound = "Woof Woof!";
      break;
    default:
      animalSound = "unknown!"
      break;
  }
  res.send("The " + animal + " says " + animalSound);
});
************************************************************/

// COLT'S SOLUTION - USING key value pair
app.get("/speak/:animal", function(req, res){

  // define a dictionary of animal sound instead using if else
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!",
    cat: "I hate you human",
    goldfish: "..."
  }
  
  var animalName = req.params.animal.toLowerCase();
  var animalSound = sounds[animalName];

  res.send("The " + animalName + " says '" + animalSound + "'");
});


// REPEAT WORD ROUTE
app.get("/repeat/:wordToRepeat/:numOfTimes", function(req, res){
  var wordToRepeat = req.params.wordToRepeat;
  var numOfTimes = parseInt(req.params.numOfTimes);
  var wordStr = "";

  for(i = 0; i < numOfTimes; i++){
    wordStr += wordToRepeat + " ";   
  }

  res.send(wordStr);
});

// IF NO OTHER ROUTES FOUND
app.get("*", function(req, res){
  res.send("Sorry, page not found... What are you doing with your life?");
});


// =====================================
// START SERVER
// =====================================
app.listen(3000, function(){
  console.log("Server has started on port 3000...");
});