var conferenceID;
var token = "79504c416261656753645767626671765946584665684248484a526a726468776e4152787145425763667174";
//var token = myConfig.token;

makeConfID();

addPeople();

function makeConfID(){
    ask("Enter a 4-digit number to use as the conference ID",
        {
            choices: "[4 DIGITS]",
            onChoice: function(event){
                conferenceID = parseInt(event.value);
            }
        });
}

function addPerson(numberToDial,conferenceID){
    say("Calling them now.");

    importPackage(java.io, java.net, javax.xml.xpath, org.xml.sax);
    
    var urlConf = "http://api.tropo.com/1.0/sessions?action=create&token="+token+"&numberToDial="+numberToDial+"&conferenceID="+conferenceID;
    log("@@url: " + urlConf);
    var url = new URL(urlConf);
    var urlStream = url.openStream();
}

function addPeople(){
    ask("Enter a 10-digit number of someone to add to the conference.",
        {
            choices: "[10 DIGITS]",
            onChoice: function (event) {
                addPerson(event.value,conferenceID);
            }
        });

    say("You will now be placed into the conference " + conferenceID);
        conference(conferenceID, {
        terminator: "*",
        playTones: true,
        onChoice: function(event) {
            say("Disconnecting");
        }
    });
}