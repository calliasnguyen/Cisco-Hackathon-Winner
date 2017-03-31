var callerID = currentCall.callerID;

say("This is the Emergency Response Line!");
record("What is the emergency and your current location?", {
    beep:true,
    maxTime:80,
    terminator: "1",
    //transcriptionOutURI:"http://requestb.in/1g331pt1",
    transcriptionOutURI: "https://3d27d5c4.ngrok.io/api/Tropo",
    transcriptionID:callerID + "," + getRandomArbitrary(51.0442711,51.08) + "," + getRandomArbitrary(-114.0685925,-114.09)
    }
);



function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

//startCallRecording("http://requestb.in/19cfjgy1", {transcriptionOutURI: "http://requestb.in/19cfjgy1"});
//result = ask("What's your favorite color?  Choose from red, blue or green.", {
//choices:"red, blue, green"
//});
//stopCallRecording();  
//say("you said" + result.value);

//",-114.0885925"