const message = parseInt(prompt('Choose an option: \n 1: Show messages \n 2: Add a message \n 3: Delete a message \n 0: Quit'));

const messages = [
    'message 01',
    'message 02',
    'message 03',
    'message 04',
    'message 05',
];

// alert('Your input is: ' + message)
const output = document.getElementById("output");
if (message == 1){
    output.innerHTML = "The current messages are: <br>";
    for (var i = 0; i < messages.length; i++){
        output.innerHTML  = output.innerHTML + (i+1) + ": " + messages[i] + "<br>";
    }
}
if (message == 2){
    var prompt2 = prompt("Enter a new message");
    messages.push(prompt2);
    output.innerHTML = "The current messages are: <br>";
    for (var i = 0; i < messages.length; i++){
        output.innerHTML = output.innerHTML +  (i+1) + ": " + messages[i] + "<br>";
    }
}

if (message == 3){
    var deleteprompt = prompt("Enter the message index (between 1 and " + messages.length + ")");
    if (deleteprompt < messages.length+1){
        messages.splice(deleteprompt-1, 1);
        console.log(messages);
        output.innerHTML = "The current messages are: <br>";
        for (var i = 0; i<messages.length; i++){
            output.innerHTML = output.innerHTML + (i+1) + ": " + messages[i] + "<br>";
        }
    }
    else {
        output.innerHTML = "Enter a valid index";
    }
}

if (message == 0){
    output.innerHTML = "Good Bye";
}

if (message > 3){
    output.innerHTML = "Please refresh and select a correct command.";
}
