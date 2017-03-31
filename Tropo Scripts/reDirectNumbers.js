wait(1600);
answer();
wait(1600);

results = ask("Hello, how are you doing today? Please select from the following choices. Press 1 to call Joe. Press 2 to call Billy",
{choices: "[1 DIGIT]"});


if(results.value == 1)
{
    say("Please wait as we will transfer your call to jimmy");
    transfer();
}
else if(results.value == 2)
{
 say("Please wait as we will transfer your call to billy");
    transfer();
}
else
{
    say("Invalid entry sorry bro.");
    hangup();
}