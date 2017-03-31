//var result = ask("What is your location?", {
  
  // network: "SMS",
  //// timeout: 10.0
//});

//say("You said " + result.value);
//log("They said " + result.value);


//notifying about production related issues and alarms

var numbers = eval(numbersToDial); //eval converts the number to JSON so we can read a list of numbers

for (var i = 0; i < numbers.length; i++) {
    message(msg, {network: networkToUse, to: "+" + numbers[i], voice:"Ava"});
    log("ProductionIssues: " + numbers[i]);
}