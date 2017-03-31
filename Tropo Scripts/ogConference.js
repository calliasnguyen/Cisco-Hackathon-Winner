call("+"+numberToDial, {timeout: 60});
wait(5000);
say('Welcome to the conference. Press the pound key to exit.');
conference(conferenceID, {terminator: '#'});
say('Thanks for joining the conference.');
hangup();