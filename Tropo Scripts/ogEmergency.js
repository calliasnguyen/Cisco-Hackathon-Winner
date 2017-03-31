

//for (var i = 0; i < numbersToDial.length; i++)
//{
//    log("BEES2: " + numbersToDial[i].number);
//   message(msg, {network: networkToUse, to: "+" + numbersToDial[i].number, voice:"Ava"});
//}
var numbers = eval(numbersToDial);

for (var i = 0; i < numbers.length; i++) {
    message(msg, {network: networkToUse, to: "+" + numbers[i], callerID:"+"+callerNumber, voice:"Ava"});
    log("BEES7: " + numbers[i]);
}
//log("BEES5: " + eval(numbersToDial));
//log("BEES5: " + numbersToDial[0][0]);
//message(msg, {network: networkToUse, to: "+" + numbersToDial[0][0], voice:"Ava"});



//message(msg, {network: networkToUse, to: "+17782418749", voice:"Sin-ji"});


//JSON Objects
//msg: "send a message"
// networkToUse: SMS/INUM
// callerNumber: Any Number we want
//
//