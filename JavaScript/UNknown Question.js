const greeting = 'Hello, World!';

function sendGreeting(name){
    let greeting;
    if(name) {
        greeting ="Hello, ${name}!";
        return greeting;
    }
    else {
        return greeting;
    };
};
sendGreeting();
