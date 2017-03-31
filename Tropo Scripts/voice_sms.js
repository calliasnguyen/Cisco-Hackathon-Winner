  ask("What's your four or five digit pin? Press pound when finished", {
    choices:"[4-5 DIGITS]",
    terminator:"#",
    timeout:15.0,
    mode:"dtmf",
    interdigitTimeout: 5,
    onChoice: function(event) {
        say("Choice is " + event.value);
    },
    onBadChoice: function(event) {
        say("On Bad Choice!");
    }
});  